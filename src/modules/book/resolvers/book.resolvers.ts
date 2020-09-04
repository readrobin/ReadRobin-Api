import { book, readAllBooks } from './queries/book.queries';
import { createBook } from './mutations/book.mutations';

const bookResolvers = {
	queries: {
		book,
		readAllBooks,
	},
	mutations: {
		createBook,
	},
};

export default bookResolvers;
