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
  description: z.string().optional(),
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
// Collection pour les projets
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    role: z.string(),
    description: z.string(), // Une phrase d'accroche pour la liste
    pubDate: z.date(),
    heroImage: z.string().optional(), // Screenshot du projet
    techStack: z.array(z.string()), // ex: ['Astro', 'Sanity', 'Tailwind']
    liveUrl: z.string().optional().nullable(), // Lien vers le site (optionnel)
  }),
});

// 3. On exporte nos collections
export const collections = {
  'blog': blogCollection,
  'projects': projectsCollection,
};