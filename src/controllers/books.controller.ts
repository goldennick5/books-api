import express, { Request, Response, Router } from 'express'
import { getAllBooks, getBookById, createBook } from '../models/books.model'

const router: Router = express.Router()

router.get('/books', async (req: Request, res: Response) => {
  try {
    const books = await getAllBooks()
    res.status(200).json(books)
  } catch (error) {
    console.error(error)
    res.status(500).send('server error')
  }
})

router.get('/books/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const book = await getBookById(parseInt(id))
    if (book) {
      res.json(book)
    } else {
      res.status(404).json({
        message: 'book not found'
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('server error')
  }
})

router.post('/books', async (req: Request, res: Response) => {
  try {
    const title = req.body.title;
    const author = req.body.author;
    const content = req.body.content;
    const book = await createBook(title, author, content);
    console.log(book)
    res.json(book);
  } catch (error) {
    console.error(error)
    res.status(500).send('server error')
  }
})

export default router
