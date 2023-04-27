import Books from "../models/book.model";

class BookService {
  async getAllBooks(): Promise<Books[]> {
    return await Books.findAll();
  }
}

export default BookService