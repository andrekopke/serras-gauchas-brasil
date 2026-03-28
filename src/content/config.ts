import { defineCollection, z } from 'astro:content';

const destinationsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    state: z.string(),
    description: z.string(),
    mainImage: z.string(),
    featured: z.boolean().default(false),
  }),
});

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    destination: z.string(), // ID da cidade (ex: gramado)
    type: z.enum(['atração', 'gastronomia', 'hospedagem', 'dica']),
    heroImage: z.string(),
    rating: z.number().min(0).max(5),
    priceRange: z.number().min(1).max(4),
    affiliateLink: z.string().optional(),
  }),
});

export const collections = {
  'destinations': destinationsCollection,
  'guides': guidesCollection,
};
