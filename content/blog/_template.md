---
title: "Your article title"
description: "One or two sentences. This is the summary shown on the blog index, in search results and in the LinkedIn preview card."
date: 2026-10-22
tags: ["Data Engineering", "Snowflake"]
draft: true
---

Copy this file to `content/blog/your-article-slug.md`. The file name becomes the URL:
`/blog/your-article-slug/`.

Set `draft: false` (or delete the line) when you're ready to publish. Drafts are visible
when running `npm run dev` but are left out of the production build.

## Use headings to structure the piece

Regular Markdown works, including **bold**, _italics_, [links](https://example.com),
lists, tables and block quotes.

> Pull quotes look like this.

```sql
select customer_id, sum(amount) as lifetime_value
from orders
group by 1;
```

| Column | Works |
| ------ | ----- |
| Tables | Yes   |
