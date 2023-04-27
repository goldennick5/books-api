import Books, { BooksInput, BooksOutput } from '../models/book.model'

class BookService {
  // indicating that the id property is optional by giving to book parameter BooksInput interface
  async createBook (book: BooksInput): Promise<Books> {
    return await Books.create(book)
  }

  async getAllBooks (): Promise<Books[]> {
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
}

export default BookService
