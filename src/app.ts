import { config } from 'dotenv'
config()
import express, { Express } from 'express'
import cors from 'cors'
import path from 'path'

const app: Express = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
