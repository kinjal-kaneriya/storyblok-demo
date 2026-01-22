import { RecommendedTour } from "@/components/RecommendedTour";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const fetchToursPage = async () => {
  const {isEnabled} = await draftMode();
  const client = getStoryblokApi();
  try {
    const response = await client.getStory(`tours`, {
      version: process.env.NODE_ENV === "development" || isEnabled
        ? "draft" 
       : "published",
    });
    return response.data.story;
  }
  catch (err) {
    console.error("Storyblok Error:", err);
    return null;
  }
}

const fetchAllTours = async () => {
  const {isEnabled} = await draftMode();
  const client = getStoryblokApi();
  try {
    const response = await client.getStories({
      content_type: "tour",
      version: process.env.NODE_ENV === "development" || isEnabled 
        ? "draft" 
        : "published",
    })
    return response.data.stories;
  }
  catch (err) {
    console.error("Storyblok Error:", err);
    return null;
  }
}

const ToursPage = async () => {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();
  return (
    <div>
      <StoryblokStory story={story} />
      <div className="container grid md:grid-cols-3 gap-4 mx-auto px-4 py-16 w-full">
        {tours?.map((tour) => (
          <RecommendedTour key={tour.content._uid} story={tour} />
        ))}
      </div>
    </div>
  )
};

export default ToursPage;