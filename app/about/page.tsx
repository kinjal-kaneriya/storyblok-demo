import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

const fetchAboutPage = async () => {
  const { isEnabled } = await draftMode()
  const client = getStoryblokApi()
  try {
    const response = await client.getStory(`about`, {
      version:
        process.env.NODE_ENV === 'development' || isEnabled
          ? 'draft'
          : 'published',
    })
    return response.data.story
  } catch (err) {
    console.error('About Page Error:', err)
    return null
  }
}

export default async function AboutPage() {
  const story = await fetchAboutPage()

  if (!story) {
    notFound()
  }

  return (
    <div className='pt-20'>
      <StoryblokStory story={story} />
    </div>
  )
}
