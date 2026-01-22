import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { Metadata } from "next";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
  title: "Home - Storyblok demo",
  description: "Experience the ultimate Storyblok-powered travel demo.",
};

const fetchHomePage = async () => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  try {
    const response = await client.getStory(`home`, {
      version: process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
      resolve_relations: "recommended_tours.tours"
    });
    return response.data.story;
  }
  catch (err) {
    console.error("Storyblok Error:", err);
    return null;
  }
}

const HomePage = async () => {
  const story = await fetchHomePage();
  return <StoryblokStory
    bridgeOptions={{ resolveRelations: ["recommended_tours.tours"] }}
    story={story} />
};

export default HomePage;