import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-start px-5 py-32 sm:px-8">
      <p className="text-sm font-medium text-accent">404</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="mt-8 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">
        Back to home
      </Link>
    </div>
  );
}
