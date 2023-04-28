import Books, {
  BooksOutput,
  BooksAtributes
} from '../models/book.model'

class BookService {
  async createBook (books: BooksAtributes[]): Promise<BooksOutput[]> {
    const createdBooks: Books[] = []
    for (const book of books) {
      const createdBook = await Books.build(book)
      await createdBook.save()
      createdBooks.push(createdBook)
    }
    return await createdBooks
  }

  async getAllBooks (): Promise<BooksOutput[]> {
    return await Books.findAll()
  }

  // ensuring that the id property is always present in the returned object
  async getOneBook (id: number): Promise<BooksOutput | null> {
    return await Books.findByPk(id)
  }

  async updateBook (id: number, book: Books): Promise<number> {
    // using destructuring, we can assign the first element of the array to a variable and ignore the second element [number, Books[]]
    const [numAffectedRows] = await Books.update(book, { where: { id } })
    return numAffectedRows
  }

  async deleteBook (id: string): Promise<number> {
    return await Books.destroy({ where: { id } })
  }
}

export default BookService
