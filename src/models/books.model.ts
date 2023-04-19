import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllBooks = async () => {
  try {
    const books = await prisma.book.findMany()
    return books
  } catch (error) {
    console.log(error)
  }
}

export const getBookById = async (id: number) => {
  try {
    const book = await prisma.book.findUnique({
      where: { id }
    })
    return book
  } catch (error) {
    console.log(error)
  }
}

export const createBook = async (
  title: string,
  author: string,
  content: string
) => {
  try {
    const book = await prisma.book.create({
      data: {
        title,
        author,
        content
      }
    })
    return book
  } catch (error) {
    console.log(error)
  }
}
