// 1. On importe les outils 'zod' d'Astro
import { defineCollection, z } from 'astro:content';

// 2. On définit notre "collection" de blog
const blogCollection = defineCollection({
  type: 'content', // On veut du contenu (Markdown)
  schema: z.object({
    title: z.string(), // Le titre est obligatoire et doit être du texte
    description: z.string(), // La description est obligatoire
    pubDate: z.date(), // La date de publication est obligatoire
    heroImage: z.string().optional(), // Une image de couverture (optionnelle)
  }),
});
// Exemple d'une autre collection pour modifier les pages statiques
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Champs communs
    title: z.string(),
    
    // Champs Accueil (optionnels)
    subtitle: z.string().optional(),
    ctaText: z.string().optional(),
    ctaLink: z.string().optional(),

    // Champs À Propos (optionnels aussi)
    intro: z.string().optional(),
    image: z.string().optional(),
  }),
});

// 3. On exporte nos collections
export const collections = {
  'blog': blogCollection,
};