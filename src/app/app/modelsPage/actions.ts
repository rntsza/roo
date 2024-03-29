'use server'

// import { auth } from '@/services/auth'
import { prisma } from '@/services/database'
// import { z } from 'zod'
// import { } from './schema'

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

export async function getInitialModel(model: any) {
    const initialModel = await prisma.initialModel.findFirstOrThrow({
        where: {
            id: model
        }
    })
    // Adicionar filtro para trazer só os modelos do usuário daquela conta logada
    return initialModel
}

export async function getClientFromInitial() {
    const clientFromInitial = await prisma.registeredUser.findMany()
    return clientFromInitial
}