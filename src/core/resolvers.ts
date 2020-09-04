import { bookResolvers } from 'src/modules/book';
import { authorResolvers } from 'src/modules/author';

const resolvers = {
	Query: {
		...bookResolvers.queries,
		...authorResolvers.queries,
	},
	Book: {
		author: authorResolvers.queries.author,
	},
	Author: {
		books: bookResolvers.queries.readAllBooks,
	},
};

export default resolvers;
