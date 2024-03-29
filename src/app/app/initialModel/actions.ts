'use server'

import { auth } from '@/services/auth'
import { prisma } from '@/services/database'
import { z } from 'zod'
import { deleteInitialModelSchema, upsertInitialModelSchema } from './schema'

export async function getUserModels() {
  const session = await auth()

  const models = await prisma.initialModel.findMany({
    where: {
      userId: session?.user?.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return models
}

export async function upsertModel(input: z.infer<typeof upsertInitialModelSchema>) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    }
  }

  if (input.id) {
    const model = await prisma.initialModel.findUnique({
      where: {
        id: input.id,
        userId: session?.user?.id,
      },
      select: {
        id: true,
      },
    })

    if (!model) {
      return {
        error: 'Not found',
        data: null,
      }
    }

    const updatedModel = await prisma.initialModel.update({
      where: {
        id: input.id,
        userId: session?.user?.id,
      },
      data: {
        title: input.title,
        modelText: input.modelText,
        modelJson: input.modelJson
      },
    })

    return {
      error: null,
      data: updatedModel,
    }
  }

  if (!input.title) {
    return {
      error: 'Title is required',
      data: null,
    }
  }

  const model = await prisma.initialModel.create({
    data: {
      title: input.title,
      userId: session?.user?.id,
    },
  })

  return model
}

export async function deleteTodo(input: z.infer<typeof deleteInitialModelSchema>) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    }
  }

  const model = await prisma.initialModel.findUnique({
    where: {
      id: input.id,
      userId: session?.user?.id,
    },
    select: {
      id: true,
    },
  })

  if (!model) {
    return {
      error: 'Not found',
      data: null,
    }
  }

  await prisma.initialModel.delete({
    where: {
      id: input.id,
      userId: session?.user?.id,
    },
  })

  return {
    error: null,
    data: 'Model deleted successfully',
  }
}