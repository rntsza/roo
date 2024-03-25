'use server'

import { auth } from '@/services/auth'
import { prisma } from '@/services/database'
import { z } from 'zod'
import { deleteInitialModelSchema, upsertInitialModelSchema } from './schema'

export async function getUserInitialModels() {
  const initialModels = await prisma.initialModel.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return initialModels
}

export async function getUsers() {
  const users = await prisma.user.findMany()
  return users
}

export async function getInitialModel(model) {
    const initialModel = await prisma.initialModel.findFirstOrThrow({
        where: {
            id: model
        }
    })
    // Adicionar filtro para trazer só os modelos do usuário
    return initialModel
}

export async function getClientFromInitial() {
    const clientFromInitial = await prisma.registeredUser.findMany()
    return clientFromInitial
}

// export async function upsertInitialModel(input: z.infer<typeof upsertInitialModelSchema>) {
//   const session = await auth()

//   if (!session?.user?.id) {
//     return {
//       error: 'Not authorized',
//       data: null,
//     }
//   }

//   if (input.id) {
//     const initialModel = await prisma.initialModel.findUnique({
//       where: {
//         id: input.id,
//         userId: session?.user?.id,
//       },
//       select: {
//         id: true,
//       },
//     })

//     if (!initialModel) {
//       return {
//         error: 'Not found',
//         data: null,
//       }
//     }

//     const updatedInitialModel = await prisma.initialModel.update({
//       where: {
//         id: input.id,
//         userId: session?.user?.id,
//       },
//       data: {
//         title: input.title,
//         modelText: input.modelText,
//         modelJson: input.modelJson,
//       },
//     })

//     return {
//       error: null,
//       data: updatedInitialModel,
//     }
//   }

//   if (!input.title) {
//     return {
//       error: 'Title is required',
//       data: null,
//     }
//   }

//   const initialModel = await prisma.initialModel.create({
//     data: {
//       title: input.title,
//       userId: session?.user?.id,
//     },
//   })

//   return initialModel
// }

