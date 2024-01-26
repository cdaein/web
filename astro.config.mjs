import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
// @ts-ignore
// import rehypeFigure from "@microflash/rehype-figure";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      // extendMarkdownConfig: false,
      // rehypePlugins: [rehypeFigure],
    }),
    tailwind(),
  ],
  markdown: {
    // rehypePlugins: [rehypeFigure],
  },
});

