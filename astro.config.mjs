import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://paperdove.com",
  vite: {
    plugins: [
      tailwindcss({
        // NOTE: can i use these tw v3 astro plugin options below?
        //   // tailwind preflight
        //   applyBaseStyles: true,
        //   // Example: Allow writing nested CSS declarations
        //   // alongside Tailwind's syntax
        //   nesting: true,
      }),
    ],
  },
  integrations: [
    mdx({
      // extendMarkdownConfig: false,
    }),
  ],
  markdown: {},
});
