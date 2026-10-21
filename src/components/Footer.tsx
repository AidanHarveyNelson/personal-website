import Link from "next/link";
import { site } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {site.brand}
        </p>
        <div className="flex items-center gap-6">
          <Link href="/blog/" className="hover:text-foreground">
            Blog
          </Link>
          <a href={`${process.env.PAGES_BASE_PATH ?? ""}/rss.xml`} className="hover:text-foreground">
            RSS
          </a>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
