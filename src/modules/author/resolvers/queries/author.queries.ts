import authorModel from '../../model/author.model';
import { GraphQLResolveInfo } from 'graphql';

export const author = (
	parent,
	args,
	context,
	info: GraphQLResolveInfo,
): any => {
	return authorModel.filter((person) => {
		// return person.name === ;
	})[0];
};

export const readAllAuthors = () => {
	return authorModel;
};

export default { readAuthor: author, readAllAuthors };
