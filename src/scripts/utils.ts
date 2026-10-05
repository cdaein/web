export function ipfsToHttps(path: string) {
  return `https://ipfs.io/ipfs/${path.slice(7)}`;
}

/**
 * ex. Parse `2023/230500-sequenced` into `sequenced`
 *
 * @param path - ex. `2023/230500-sequenced`
 */
export function parseSlug(path: string) {
  const subpaths = path.split("/");
  // ex. 230500-title-title
  const testStr = subpaths[subpaths.length - 1];
  const regex = /^\d{6}-(.+)$/;
  const match = regex.exec(testStr);

  if (match) {
    return match[1];
  } else {
    // if no match, it's likely that custom `slug` is defined in the frontmatter.
    // if so, just use it.
    // REVIEW: there may be a case where no match means error.
    // rn, there's no system to check that.
    return testStr;
  }
}

/**
 * Resolve a post's `cover` frontmatter into the image's source path, so it can be
 * looked up in an `import.meta.glob` of content images.
 *
 * Takes `filePath` (not `id`): with a custom `slug` in the frontmatter, `id` is just
 * the slug, not the path.
 *
 * ex. (`src/content/work/2022/220821-duet/index.mdx`, `./thumb.png`)
 *     -> `/src/content/work/2022/220821-duet/thumb.png`
 *
 * @param filePath - Source path of the post, ex. `src/content/work/2022/220821-duet/index.mdx`
 * @param cover - `cover` frontmatter, relative to the post directory. ex. `./thumb.png`
 */
export function parseCoverPath(filePath?: string, cover?: string) {
  if (!filePath || !cover) return undefined;

  const postDir = filePath.replace(/\/[^/]+$/, ""); // removes "/index.mdx"
  return `/${postDir}/${cover.replace(/^\.\//, "")}`;
}

export function camelcase(str: string) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

/**
 * Returns the dimensions of a video asynchrounsly.
 * https://stackoverflow.com/a/45355068/3125961
 *
 * @param url - Url of the video to get dimensions from.
 * @return  Promise which returns the dimensions of the video in 'width' and 'height' properties.
 */
export function getVideoDimensionsOf(
  url: string,
): Promise<{ width: number; height: number }> {
  return new Promise((resolve) => {
    // create the video element
    const video = document.createElement("video");

    // place a listener on it
    video.addEventListener(
      "loadedmetadata",
      function () {
        // retrieve dimensions
        const height = this.videoHeight;
        const width = this.videoWidth;

        // send back result
        resolve({ height, width });
      },
      false,
    );

    // start download meta-datas
    video.src = url;
  });
}
