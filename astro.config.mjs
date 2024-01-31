import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
// @ts-ignore
// import rehypeFigure from "@microflash/rehype-figure";

// https://astro.build/config
export default defineConfig({
  site: "https://paperdove.com",
  integrations: [
    mdx({
      // extendMarkdownConfig: false,
      // rehypePlugins: [rehypeFigure],
    }),
    tailwind({
      // tailwind preflight
      applyBaseStyles: true,
      // Example: Allow writing nested CSS declarations
      // alongside Tailwind's syntax
      nesting: true,
    }),
  ],
  markdown: {
    // rehypePlugins: [rehypeFigure],
  },
});
