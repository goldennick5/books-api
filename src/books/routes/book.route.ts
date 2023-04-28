import express from 'express'
import Book from '../controllers/book.controller'

const bookRouter = express.Router()
const bookController = new Book()

bookRouter.post('/createBook', bookController.createBook)
bookRouter.get('/getAllBooks', bookController.getAllBooks)
bookRouter.get('/getOneBook/:id', bookController.getOneBook)
bookRouter.delete('/deleteBook/:id', bookController.deleteBook)

export default bookRouter
