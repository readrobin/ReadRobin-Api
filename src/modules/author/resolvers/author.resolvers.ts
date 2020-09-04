import {
	author,
	readAllAuthors,
} from 'src/modules/author/resolvers/queries/author.queries';

const authorResolvers = {
	queries: {
		author,
		readAllAuthors,
	},
};

export default authorResolvers;
