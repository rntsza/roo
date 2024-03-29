import { z } from 'zod';

export const upsertInitialModelSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  modelText: z.string().optional().nullable(),
  modelJson: z.string().optional().nullable(),
  userId: z.string(),
});

export const deleteInitialModelSchema = z.object({
  id: z.string(),
});