import { Request, Response } from 'express'
import BookService from '../services/book.service'

const bookService = new BookService()

class Book {
  async getAllBooks (req: Request, res: Response) {
    const books = await bookService.getAllBooks();
    res.json(books);
  }
}

export default Book
