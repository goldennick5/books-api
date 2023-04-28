import { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import BookService from '../services/book.service'
import { BooksInput, BooksAtributes } from '../models/book.model'

const bookService = new BookService()

class Book {
  async createBook (req: Request, res: Response) {
    try {
      const filePath = path.join(__dirname, '../../books_data.json')
      const jsonData = fs.readFileSync(filePath, 'utf-8')
      const booksData = JSON.parse(jsonData)
      const books: BooksAtributes[] = booksData.map((bookData: any) => ({
        id: bookData.id,
        title: bookData.title,
        author: bookData.author,
        text: bookData.text,
        image: bookData.image
      }))
      const createBooks = await bookService.createBook(books)
      res.status(201).json(createBooks)
    } catch (error) {
      console.error(error)
    }
  }

  async getAllBooks (req: Request, res: Response) {
    try {
      const books = await bookService.getAllBooks()
      res.status(200).json(books)
    } catch (error) {
      console.error(error)
    }
  }

  async getOneBook (req: Request, res: Response) {
    try {
      const id = req.params.id
      const book = await bookService.getOneBook(+id)
      res.status(200).json(book)
    } catch (error) {
      console.error(error)
    }
  }
}

export default Book
