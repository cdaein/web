// NOTE: not using it due to Astro not supporting MDX full content feed.
// - i'm using a custom solution found.

import rss from "@astrojs/rss";
import { site } from "@data/siteMetadata";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
// import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt({
  linkify: true,
});

export async function GET(context: APIContext) {
  const workCollection = (
    await getCollection("work", ({ data }) => {
      return !data.draft;
    })
  ).reverse();

  const body = workCollection[0].body;

  console.log(parser.render(body));

  return rss({
    title: site.title,
    description: site.description,
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site!,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports.site,
    items: workCollection.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/${post.slug}`,
      // NOTE: currently, full content is not possible with MDX.
      // Astro needs to support in the future.
      //   content: sanitizeHtml(parser.render(post.body)),
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
