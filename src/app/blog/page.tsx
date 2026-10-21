import type { Metadata } from "next";
import { PostList } from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

const description = `Articles by ${site.name} on data engineering, analytics, AI and building reliable data platforms.`;

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: "/blog/" },
  openGraph: { title: `Blog | ${site.name}`, description, url: "/blog/" },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-5 pt-20 pb-24 sm:px-8 sm:pt-24">
      <p className="text-sm font-medium text-accent">Blog</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Writing</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>

      <div className="mt-14">
        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <p className="rounded-2xl border border-dashed border-border px-6 py-12 text-center text-muted">
            The first articles are on their way. Check back soon.
          </p>
        )}
      </div>
    </div>
  );
}
