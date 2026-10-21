import { renderOgImage } from "@/lib/og";

export const dynamic = "force-static";

export function GET() {
  return renderOgImage({
    title: "Reliable data platforms that turn information into decisions.",
    eyebrow: "Data & Analytics Consulting",
  });
}
