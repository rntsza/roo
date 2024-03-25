import { z } from 'zod'

export const upsertInitialModelSchema = z.object({
    id: z.string().optional(),
    title: z.string().optional(),
    modelText: z.string().optional().nullable(),
    modelJson: z.string().optional().nullable(),
    user: z.object({
        id: z.string(),
        name: z.string(),
        email: z.string().email(),
        emailVerified: z.date().optional().nullable(),
        image: z.string().optional().nullable(),
        initialModels: z.array(z.object({
            id: z.string(),
            name: z.string(),
            email: z.string().email(),
        }))
    })
})

export const deleteInitialModelSchema = z.object({
    id: z.string()
})

