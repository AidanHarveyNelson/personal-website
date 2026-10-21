import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { LinkedInIcon } from "@/components/SocialLinks";
import { formatDate, getPost, renderMarkdown } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";
import { postParams } from "./params";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export const generateStaticParams = postParams;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};

  const url = `/blog/${post.slug}/`;
  const images = [{ url: `${url}og.png`, width: 1200, height: 630, alt: post.title }];
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [site.name],
      tags: post.tags,
      images,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images },
  };
}

export default async function BlogPost({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const html = await renderMarkdown(post.content);
  const url = absoluteUrl(`/blog/${post.slug}/`);
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    url,
    image: `${url}og.png`,
    author: { "@type": "Person", name: site.name, url: absoluteUrl("/") },
  };

  return (
    <article className="mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Link href="/blog/" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground">
        <ArrowLeft className="size-4" /> All articles
      </Link>

      <header className="mt-10 border-b border-border pb-10">
        {post.tags.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                {tag}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl sm:leading-[1.1]">
          {post.title}
        </h1>
        {post.description && <p className="mt-5 text-lg leading-relaxed text-muted">{post.description}</p>}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
          <p>
            {site.name} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
          </p>
          <ShareButton href={shareUrl} />
        </div>
      </header>

      <div
        className="prose prose-lg mt-10 max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:underline-offset-2 prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <footer className="mt-16 flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">Found this useful?</p>
          <p className="mt-1 text-sm text-muted">
            Share it with your network, or get in touch if you&apos;d like help with your own data platform.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <ShareButton href={shareUrl} />
          {site.links.booking ? (
            <a
              href={site.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-85"
            >
              <CalendarDays className="size-4" /> Book a call
            </a>
          ) : (
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-85"
            >
              Work with me <ArrowRight className="size-4" />
            </Link>
          )}
        </div>
      </footer>
    </article>
  );
}

function ShareButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      <LinkedInIcon className="size-4" /> Share on LinkedIn
    </a>
  );
}
