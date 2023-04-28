import express from 'express'
import Book from '../controllers/book.controller'

const bookRouter = express.Router()
const bookController = new Book()

bookRouter.post('/createBook', bookController.createBook)
bookRouter.get('/getAllBooks', bookController.getAllBooks)

export default bookRouter
