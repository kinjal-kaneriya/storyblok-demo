import { ImageLoaderProps } from "next/image";

const storyblokImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
   return `${src}/m/${width}x0/filters:quality(${quality || 75})`;
};

export default storyblokImageLoader;