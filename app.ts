import { config } from 'dotenv'
config()
import express, { Express } from 'express'
import cors from 'cors'
import bookRouter from './src/controllers/books.controller';

const app: Express = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api', bookRouter)

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})
