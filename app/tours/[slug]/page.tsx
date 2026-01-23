import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'

export async function generateMetadata(props: any): Promise<Metadata> {
  const params = await props.params
  const story = await fetchTourPage(params.slug)

  if (!story) {
    return {
      title: 'Tour Not Found',
    }
  }

  return {
    title: `${story.content.name} - Taiwan Tours`,
    description: story.content.introduction,
    openGraph: {
      images: [story.content.main_image.filename],
    },
  }
}

export const generateStaticParams = async () => {
  const client = getStoryblokApi()
  const response = await client.getStories({
    content_type: 'tour',
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
  })

  return response.data.stories.map((story) => ({ slug: story.slug }))
}

const fetchTourPage = async (slug: string) => {
  const { isEnabled } = await draftMode()
  const client = getStoryblokApi()
  try {
    const response = await client.getStory(`tours/${slug}`, {
      version:
        process.env.NODE_ENV === 'development' || isEnabled
          ? 'draft'
          : 'published',
    })
    return response.data.story
  } catch (err) {
    console.error('Storyblok Error:', err)
    return null
  }
}

const TourPage = async (props: any) => {
  const params = await props.params
  const story = await fetchTourPage(params.slug)
  return (
    <StoryblokStory
      bridgeOptions={{ resolveRelations: ['recommended_tours.tours'] }}
      story={story}
    />
  )
}

export default TourPage
