import { getPost } from "@/lib/posts";
import { renderOgImage } from "@/lib/og";
import { postParams } from "../params";

export const dynamic = "force-static";
export const dynamicParams = false;
export const generateStaticParams = postParams;

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  return renderOgImage({ title: post?.title ?? "Blog", eyebrow: "Blog" });
}
