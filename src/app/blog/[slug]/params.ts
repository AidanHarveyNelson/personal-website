import { getAllPosts } from "@/lib/posts";

// Static export requires at least one param; "_" renders as a 404 until the first post exists.
export function postParams() {
  const posts = getAllPosts();
  return posts.length > 0 ? posts.map((p) => ({ slug: p.slug })) : [{ slug: "_" }];
}
