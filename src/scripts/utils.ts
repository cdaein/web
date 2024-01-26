export function parseSlug(path: string) {
  const subpaths = path.split("/");
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
