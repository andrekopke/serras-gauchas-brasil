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

const couponsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    businessName: z.string(),
    image: z.string(),
    discountValue: z.string(), // Ex: "10% OFF" ou "R$ 50"
    affiliateLink: z.string(),
    category: z.enum(['atração', 'gastronomia', 'hospedagem']),
  }),
});

// Atualize o export para incluir o 'coupons'
export const collections = {
  'destinations': destinationsCollection,
  'guides': guidesCollection,
  'coupons': couponsCollection,
};

export const collections = {
  'destinations': destinationsCollection,
  'guides': guidesCollection,
};
