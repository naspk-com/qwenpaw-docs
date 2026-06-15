import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md',
      schema: z.object({
        image: z.union([
          z.string(),
          z.object({
            light: z.string(),
            dark: z.string()
          })
        ]).optional(),
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional()
        })).optional(),
        quickLinks: z.array(z.object({
          title: z.string(),
          description: z.string(),
          to: z.string(),
          icon: z.string().optional()
        })).optional(),
        features: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string().optional()
        })).optional()
      })
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['index.md', 'products/**']
      },
      schema: z.object({
        image: z.union([
          z.string(),
          z.object({
            light: z.string(),
            dark: z.string()
          })
        ]).optional(),
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional()
        })).optional(),
        features: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string().optional()
        })).optional()
      })
    }),
    products: defineCollection({
      type: 'page',
      source: {
        include: 'products/**'
      },
      schema: z.object({
        image: z.union([
          z.string(),
          z.object({
            light: z.string(),
            dark: z.string()
          })
        ]).optional(),
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional()
        })).optional(),
        quickLinks: z.array(z.object({
          title: z.string(),
          description: z.string(),
          to: z.string(),
          icon: z.string().optional()
        })).optional(),
        features: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string().optional()
        })).optional()
      })
    })
  }
})
