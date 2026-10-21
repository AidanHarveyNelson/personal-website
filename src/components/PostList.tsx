import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/posts";

export function PostList({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}/`} className="group grid gap-2 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
            <time dateTime={post.date} className="text-sm text-muted sm:pt-0.5">
              {formatDate(post.date)}
            </time>
            <div>
              <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                {post.title}
              </h3>
              {post.description && <p className="mt-2 leading-relaxed text-muted">{post.description}</p>}
              <p className="mt-3 text-xs text-muted">
                {post.readingMinutes} min read
                {post.tags.length > 0 && <> · {post.tags.join(", ")}</>}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
