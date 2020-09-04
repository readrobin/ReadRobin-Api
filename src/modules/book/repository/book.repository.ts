import books from '../model/book.model';

class BookRepository {
	public get(where): BookOutput[] {
		const filteredBook = books.filter((book) => book.id === where?.id);
		return filteredBook;
	}
}

export default BookRepository;
