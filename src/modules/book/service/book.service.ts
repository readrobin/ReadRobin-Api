import BookRepository from '../repository/book.repository';

class BookService {
	public get(where): BookOutput[] {
		const bookRepo = new BookRepository();

		return bookRepo.get(where);
	}
}

export default BookService;
