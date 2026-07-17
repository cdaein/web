import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getContainerRenderer } from "@astrojs/mdx/container-renderer";
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

  // run this command after build. it should be empty:
  // grep -oE '(src|href|poster)="[^"]*"' dist/feed.xml | grep -v 'https\?://'
  const absolutize = (html: string) =>
    html.replace(
      /(src|href|poster)="(\/[^\/][^"]*)"/g,
      (_m, attr, path) => `${attr}="${new URL(path, contextSite).href}"`,
    );

  const renderers = await loadRenderers([getContainerRenderer()]);
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
    const content = absolutize(await container.renderToString(Content));

    items.push({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      // link: new URL(`/${post.id}`, context.url.origin).toString(),
      link: new URL(`/${post.id}`, contextSite).toString(),
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
