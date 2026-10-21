# Aidan Harvey-Nelson Consulting

Personal and consulting website with a blog, built with Next.js (static export) and Tailwind CSS, deployed to GitHub Pages on every push to `main`.

Live: https://aidanharveynelson.github.io/personal-website/

## Development

```bash
npm install
npm run dev      # http://localhost:3000 (drafts are visible here)
npm run build    # static export to ./out
```

To preview a production build with the GitHub Pages base path:

```bash
PAGES_BASE_PATH=/personal-website npm run build
npx serve out    # then open /personal-website/ (serve the parent folder if needed)
```

## Writing a blog post

1. Copy `content/blog/_template.md` to `content/blog/<slug>.md`. The file name becomes the URL: `/blog/<slug>/`.
2. Fill in the frontmatter:

   | Field         | Required | Notes                                                                 |
   | ------------- | -------- | --------------------------------------------------------------------- |
   | `title`       | yes      | Also used on the generated LinkedIn/social preview image              |
   | `description` | yes      | 1–2 sentences; shown on the blog index, in search and link previews   |
   | `date`        | yes      | `YYYY-MM-DD`; posts are sorted newest first                          |
   | `updated`     | no       | `YYYY-MM-DD`; sets the modified date for SEO                          |
   | `tags`        | no       | e.g. `["Snowflake", "Data Engineering"]`                              |
   | `draft`       | no       | `true` hides the post from production builds                         |

3. Write in Markdown (GitHub-flavoured: tables, task lists, fenced code blocks with syntax highlighting).
4. Push to `main`. The site rebuilds and deploys automatically.

Files starting with `_` are never published.

### Sharing on LinkedIn

Every post gets:

- a canonical URL, e.g. `https://aidanharveynelson.github.io/personal-website/blog/<slug>/`
- an auto-generated 1200×630 preview image (`/blog/<slug>/og.png`) with the title
- Open Graph / Twitter tags, so LinkedIn shows the title, description and image
- a "Share on LinkedIn" button at the top and bottom of the article

Paste the post URL into a LinkedIn post and the preview card appears. If LinkedIn shows an old preview after you edit a post, refresh it with the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

The site also publishes `/rss.xml` and `/sitemap.xml`.

## Configuration

Name, email, location and social links live in `src/lib/site.ts`. The "Book a call" buttons appear once `links.booking` is set (e.g. a Google Calendar appointment schedule, Calendly or Cal.com link), and the LinkedIn link once `links.linkedin` is set.

If you move to a custom domain, set `url` in `src/lib/site.ts` (or `NEXT_PUBLIC_SITE_URL`) so canonical links and preview images use it.
