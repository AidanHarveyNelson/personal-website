import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/blog/"), changeFrequency: "weekly", priority: 0.8 },
    ...getAllPosts().map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}/`),
      lastModified: post.updated ?? post.date,
      priority: 0.7,
    })),
  ];
}
