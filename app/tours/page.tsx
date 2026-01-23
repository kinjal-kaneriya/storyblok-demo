import { RecommendedTour } from '@/components/RecommendedTour'
import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'

export const metadata: Metadata = {
  title: 'Tours - Discover Our Taiwan Adventures',
  description:
    'Browse our collection of curated walking and photography tours across Taiwan.',
}

const fetchToursPage = async () => {
  const { isEnabled } = await draftMode()
  const client = getStoryblokApi()
  try {
    const response = await client.getStory(`tours`, {
      version:
        process.env.NODE_ENV === 'development' || isEnabled
          ? 'draft'
          : 'published',
      resolve_relations: 'recommended_tours.tours',
    })
    return response.data.story
  } catch (err) {
    console.error('Storyblok Error:', err)
    return null
  }
}

const fetchAllTours = async () => {
  const { isEnabled } = await draftMode()
  const client = getStoryblokApi()
  try {
    const response = await client.getStories({
      content_type: 'tour',
      version:
        process.env.NODE_ENV === 'development' || isEnabled
          ? 'draft'
          : 'published',
    })
    return response.data.stories
  } catch (err) {
    console.error('Storyblok Error:', err)
    return null
  }
}

const ToursPage = async () => {
  const story = await fetchToursPage()
  const tours = await fetchAllTours()
  return (
    <div className='pt-20'>
      <StoryblokStory
        bridgeOptions={{ resolveRelations: ['recommended_tours.tours'] }}
        story={story}
      />
      <div className='container mx-auto px-4 py-24'>
        {!story && (
          <h1 className='text-4xl md:text-6xl font-black text-slate-900 mb-16 tracking-tighter text-center'>
            Our Premium Tours
          </h1>
        )}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {tours?.map((tour, index) => (
            <RecommendedTour
              key={tour.content._uid}
              story={tour}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ToursPage
