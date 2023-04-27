import { config } from 'dotenv'
config()
import express, { Express } from 'express'
import cors from 'cors'
import path from 'path'
import sequelizeConnection from './config'
import Books from './books/models/book.model'

const app: Express = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))

const start = async () => {
  try {
    await sequelizeConnection.authenticate()
    await Books.sync()
    app.listen(port, () => {
      console.log(`Server started on port ${port}`)
    })
  } catch (error) {
    console.error(error)
  }
}

start()
