import Books from './books/book.model'

const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
  Books.sync({
    alter: isDev
  })
}

export default dbInit