import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

// shortcut: zero posts yet — add .md files under src/content/blog and this list fills itself.
const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
});

export const collections = { writing };
