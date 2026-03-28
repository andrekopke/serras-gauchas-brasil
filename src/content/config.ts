import { defineCollection, z } from 'astro:content';

// 1. Coleção de Destinos (Cidades)
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

// 2. Coleção de Guias (Posts/Matérias)
const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    destination: z.string(),
    type: z.string(),
    heroImage: z.string(),
    rating: z.number().min(0).max(5),
    priceRange: z.number().min(1).max(4),
    order: z.number().default(99),
    affiliateLink: z.string().optional(),
  }),
});

// 3. Coleção de Cupons (Onde o dinheiro entra!)
const couponsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    businessName: z.string(),
    image: z.string(),
    discountValue: z.string(),
    affiliateLink: z.string(),
    category: z.enum(['atração', 'gastronomia', 'hospedagem']),
  }),
});

// O ÚNICO EXPORT (Unindo tudo)
export const collections = {
  'destinations': destinationsCollection,
  'guides': guidesCollection,
  'coupons': couponsCollection,
};
