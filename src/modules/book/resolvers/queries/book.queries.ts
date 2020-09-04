import { BookService, books as booksModel } from 'src/modules/book';
import { GraphQLResolveInfo } from 'graphql';
import { MergeInfo } from 'apollo-server';
import { Not, Like } from 'typeorm';

export const book = (
	parent,
	args: QueryBookArgs,
	context,
	info: GraphQLResolveInfo & { mergeInfo: MergeInfo },
): BookOutput => {
	const parsedArgs = parseWhere(args);
	const filteredBook = booksModel.filter(
		(book) => book.author === args.where?.authorName,
	)[0];

	return filteredBook;
};

export const readAllBooks = (
	parent,
	{ where }: QueryReadAllBooksArgs,
): BookOutput[] => {
	const bookService = new BookService();
	return bookService.get(where);
};

export default { book, readAllBooks };

interface WhereClause {
	[key: string]: any;
}

const getFieldName = (value: string): string => value.split('_').shift() || '';

const parse = (where: WhereClause | undefined): WhereClause | undefined => {
	if (where !== null && typeof where === 'object') {
		return Object.keys(where).reduce(
			(parsedWhere: WhereClause, key: string) => {
				if (key.endsWith('not')) {
					return { ...parsedWhere, [getFieldName(key)]: Not(where[key]) };
				} else if (key.endsWith('contains')) {
					return {
						...parsedWhere,
						[getFieldName(key)]: Like(`%${where[key]}%`),
					};
				}
				return { ...parsedWhere, [key]: where[key] };
			},
			{},
		);
	}
	return where;
};

export const parseWhere = async (
	// resolve,
	// root,
	args: any,
	// context: Context,
	// info: GraphQLResolveInfo,
) => {
	const parsedArgs = { ...args, where: parse(args.where) };
	return parsedArgs;
	// const result = await resolve(root, parsedArgs, context, info);
	// return result;
};
