// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const workCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    // category: z.enum(["digital art", "commission"]).optional(),
    tags: z.array(z.string()),
    featured: z.boolean(),
    cover: z.string().optional(),
    published: z.boolean(),
  }),
});

const writingCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()),
    featured: z.boolean(),
    cover: z.string(),
    published: z.boolean(),
  }),
});

const fxhashCollection = defineCollection({
  type: "data",
  // TODO: define schema (but it's a lot!!)
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  work: workCollection,
  writing: writingCollection,
  fxhash: fxhashCollection,
};
