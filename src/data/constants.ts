/** The default view for index page posts list */
export const DEFAULT_VIEW: "grid" | "list" = "grid";

export const TAGS = [
  "app",
  "animation",
  "blockchain",
  "commission",
  "editorial",
  "education",
  "generative",
  "generative art",
  "illustration",
  "interactive",
  "MDS1",
  "ml",
  "motion",
  "NFT",
  "poster",
  "print",
  "publication",
  "research",
  "software",
  "tool",
  "typography",
  "web",
  "workshop",
  "writing",
] as const;

/**
 * category describes the purpose of the work.
 * don't be too generic (ie. software => almost everything i make is a software)
 */
export const CATEGORIES = [
  "animated film",
  "app",
  "creative tool",
  "digital art",
  "education",
  "exhibition",
  "generative art",
  "illustration",
  "poster design",
  "print",
  "publication",
  "tool",
  "website",
] as const;
