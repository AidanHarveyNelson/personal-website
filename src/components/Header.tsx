import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/#services", label: "Services", hideOnMobile: true },
  { href: "/#work", label: "Work", hideOnMobile: true },
  { href: "/blog/", label: "Blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg bg-foreground text-sm text-background">AH</span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-muted transition-colors hover:text-foreground ${item.hideOnMobile ? "hidden md:block" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="ml-2 rounded-full bg-foreground px-4 py-2 font-medium text-background transition-opacity hover:opacity-85"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
