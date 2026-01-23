import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

export async function generateMetadata(props: any): Promise<Metadata> {
  const params = await props.params
  const story = await fetchTourPage(params.slug)

  if (!story) {
    return {
      title: 'Tour Not Found',
    }
  }

  return {
    title: `${story.content?.name || 'Tour'} - Taiwan Tours`,
    description: story.content?.introduction,
    openGraph: {
      images: story.content?.main_image?.filename ? [story.content.main_image.filename] : [],
    },
  }
}

export const generateStaticParams = async () => {
  const client = getStoryblokApi()
  try {
    const response = await client.getStories({
      content_type: 'tour',
      version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
    })

    return response.data.stories.map((story: any) => ({ slug: story.slug }))
  } catch (err) {
    console.error('[TourPage] Error in generateStaticParams:', err)
    return []
  }
}

const fetchTourPage = async (slug: string) => {
  const { isEnabled } = await draftMode()
  const client = getStoryblokApi()

  try {
    const version = process.env.NODE_ENV === 'development' || isEnabled ? 'draft' : 'published'

    const response = await client.getStory(`tours/${slug}`, {
      version,
      resolve_relations: 'recommended_tours.tours',
    })

    if (response.data?.story) {
      return response.data.story
    }
  } catch (err: any) {
    if (err?.status !== 404) {
      console.error(`[TourPage] Storyblok fetch error for tours/${slug}:`, err.message)
    }
  }

  try {
    const version = process.env.NODE_ENV === 'development' || isEnabled ? 'draft' : 'published'
    const fallbackResponse = await client.getStories({
      by_slugs: `*/${slug},${slug}`,
      content_type: 'tour',
      version,
      per_page: 1,
    })

    if (fallbackResponse.data?.stories?.length > 0) {
      return fallbackResponse.data.stories[0]
    }
  } catch (err: any) {
    console.error(`[TourPage] Fallback fetch failed for ${slug}:`, err.message)
  }

  return null
}

const TourPage = async (props: any) => {
  const params = await props.params
  const story = await fetchTourPage(params.slug)

  if (!story) {
    notFound()
  }

  return (
    <StoryblokStory
      bridgeOptions={{ resolveRelations: ['recommended_tours.tours'] }}
      story={story}
    />
  )
}

export default TourPage
