import { Request, Response } from 'express'

class Book {
  async getAllBooks (req: Request, res: Response) {
    res.json({ message: 'It is really working' })
  }
}

export default Book
