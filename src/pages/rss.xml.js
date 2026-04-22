import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  const publishedPosts = blog.filter((post) => !post.data.draft);
  return rss({
    title: "Khant Zaw Phyo's Blog",
    description: "A blog about tech, life, and figuring things out.",
    site: context.site,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
