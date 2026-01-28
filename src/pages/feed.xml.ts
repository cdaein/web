import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx";
import { loadRenderers } from "astro:container";
import { getCollection, render } from "astro:content";
import rss, { type RSSFeedItem } from "@astrojs/rss";
import { site } from "@data/siteMetadata";
import type { APIContext } from "astro";

// reference for Astro v5
// https://blog.damato.design/posts/astro-rss-mdx/
export async function GET(context: APIContext) {
  const contextSite = context.site;

  if (!contextSite) {
    throw new Error(
      "Missing 'site' in astro.config.mjs. RSS feed requires a base URL.",
    );
  }

  const renderers = await loadRenderers([getMDXRenderer()]);
  const container = await AstroContainer.create({ renderers });
  const workCollection = (
    await getCollection("work", ({ data }) => {
      // return data.published && !data.draft;
      return data.published;
    })
  ).sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });

  const items: RSSFeedItem[] = [];
  for (const post of workCollection) {
    const { Content } = await render(post);
    const content = await container.renderToString(Content);

    items.push({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: new URL(`/${post.slug}`, context.url.origin).toString(),
      content,
    });
  }

  return rss({
    // `<title>` field in output xml
    title: site.title,
    // `<description>` field in output xml
    description: site.description,
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: contextSite,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items,
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
