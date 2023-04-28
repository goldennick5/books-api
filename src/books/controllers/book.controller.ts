import { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import BookService from '../services/book.service'
import { BooksInput, BooksAtributes } from '../models/book.model'

const bookService = new BookService()

class Book {
  async createBook (req: Request, res: Response) {
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
    res.json(createBooks)
  }

  async getAllBooks (req: Request, res: Response) {
    const books = await bookService.getAllBooks()
    res.json(books)
  }
}

export default Book
