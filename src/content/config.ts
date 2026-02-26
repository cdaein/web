import { CATEGORIES, TAGS } from "@data/constants";
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const workCollection = defineCollection({
  type: "content",
  schema: z.object({
    /** Work post title */
    title: z.string(),
    /** (optional) post description */
    description: z.string(),
    date: z.date(),
    // category: z.enum(CATEGORIES).or(z.enum(CATEGORIES).array()).optional(),
    category: z.enum(CATEGORIES).or(z.enum(CATEGORIES).array()),
    tags: z.enum(TAGS).array().optional(),
    /** Cover image URL */
    cover: z.string().optional(),
    published: z.boolean(),
    /** Draft is visible on dev, but not included in build */
    // REVIEW: just use data.published?
    // draft: z.boolean().optional(),
  }),
});

const writingCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(CATEGORIES).or(z.enum(CATEGORIES).array()).optional(),
    tags: z.array(z.string()),
    cover: z.string(),
    published: z.boolean(),
    /** Draft is visible on dev, but not included in build */
    // draft: z.boolean().optional(),
  }),
});

const fxhashCollection = defineCollection({
  type: "data",
  // TODO: define schema (but it's a lot!!)
});

const objktCollection = defineCollection({
  type: "data",
  // TODO: define schema (but it's a lot!!)
});

const documentationCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    published: z.boolean(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  work: workCollection,
  writing: writingCollection,
  fxhash: fxhashCollection,
  objkt: objktCollection,
  documentation: documentationCollection,
};
