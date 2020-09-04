type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

type Author = {
	books?: Maybe<Array<Book>>;
	firstName?: Maybe<Scalars['String']>;
	fullName?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['ID']>;
	lastName?: Maybe<Scalars['String']>;
};

type AuthorBooksArgs = {
	ids?: Maybe<Array<Scalars['ID']>>;
	isbn?: Maybe<Scalars['String']>;
	publicationDate?: Maybe<Scalars['String']>;
	title?: Maybe<Array<Scalars['String']>>;
};

type Book = {
	author?: Maybe<Author>;
	id?: Maybe<Scalars['ID']>;
	isbn?: Maybe<Scalars['String']>;
	publicationDate?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
};

type AuthorOutput = {
	firstName?: Maybe<Scalars['String']>;
	lastName?: Maybe<Scalars['String']>;
	fullName?: Maybe<Scalars['String']>;
	bookIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

type AuthorWhere = {
	bookName?: Maybe<Scalars['String']>;
	firstName?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['ID']>;
	lastName?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
};

type BookOutput = {
	id?: Maybe<Scalars['ID']>;
	title?: Maybe<Scalars['String']>;
	authorId?: Maybe<Scalars['String']>;
	isbn?: Maybe<Scalars['String']>;
	publicationDate?: Maybe<Scalars['String']>;
};

type BookWhere = {
	authorId?: Maybe<Scalars['String']>;
	authorName?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['ID']>;
	isbn?: Maybe<Scalars['String']>;
	publicationDate?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
};

enum Sort {
	Asc = 'Asc',
	Desc = 'Desc',
}

type Query = {
	author?: Maybe<Author>;
	book?: Maybe<Book>;
	readAllAuthors?: Maybe<Array<Maybe<Author>>>;
	readAllBooks?: Maybe<Array<Maybe<Book>>>;
};

type QueryAuthorArgs = {
	id: Scalars['ID'];
};

type QueryBookArgs = {
	where: BookWhere;
};

type QueryReadAllAuthorsArgs = {
	Sort?: Maybe<Sort>;
	last?: Maybe<Scalars['Int']>;
	where?: Maybe<AuthorWhere>;
};

type QueryReadAllBooksArgs = {
	Sort?: Maybe<Sort>;
	last?: Maybe<Scalars['Int']>;
	where?: Maybe<BookWhere>;
};
