import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForPost } from "../../../scripts/generate-og";

interface OgProps {
  post: CollectionEntry<"blog">;
}

export async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.hidden);

  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post } satisfies OgProps,
  }));
}

export async function GET({ props }: { props: OgProps }) {
  const image = await generateOgImageForPost(props);

  return new Response(new Uint8Array(image), {
    headers: { "Content-Type": "image/png" },
  });
}

// Set to true to ensure static generation at build time
export const prerender = true;
