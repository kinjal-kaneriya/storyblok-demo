import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

const fetchContactPage = async () => {
  const { isEnabled } = await draftMode()
  const client = getStoryblokApi()
  try {
    const response = await client.getStory(`contact`, {
      version:
        process.env.NODE_ENV === 'development' || isEnabled
          ? 'draft'
          : 'published',
    })
    return response.data.story
  } catch (err) {
    console.error('Contact Page Error:', err)
    return null
  }
}

export default async function ContactPage() {
  const story = await fetchContactPage()

  if (!story) {
    notFound()
  }

  return (
    <div className='pt-20'>
      <StoryblokStory story={story} />
    </div>
  )
}
