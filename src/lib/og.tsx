import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "./site";

const fontDir = path.join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans");
const fonts = [
  { name: "Geist", data: fs.readFileSync(path.join(fontDir, "Geist-Regular.ttf")), weight: 400 as const },
  { name: "Geist", data: fs.readFileSync(path.join(fontDir, "Geist-SemiBold.ttf")), weight: 600 as const },
];

export const ogSize = { width: 1200, height: 630 };

export function renderOgImage({ title, eyebrow }: { title: string; eyebrow: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0b0f14",
          color: "#e8ecf1",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#3cc7b6" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#3cc7b6" }} />
          {eyebrow}
        </div>
        <div style={{ display: "flex", fontSize: title.length > 70 ? 56 : 68, fontWeight: 600, lineHeight: 1.1, letterSpacing: -2 }}>
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: "#e8ecf1",
                color: "#0b0f14",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                fontSize: 24,
              }}
            >
              AH
            </div>
            {site.name}
          </div>
          <div style={{ color: "#96a0ad" }}>{site.role}</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}
