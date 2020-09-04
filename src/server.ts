import { ApolloServer } from 'apollo-server';
import 'src/config/env.config';
import { resolvers } from 'src/core';
import typeDefs from 'src/core/schema.graphql';
// import { createConnection } from 'typeorm';
// import { ConnectionOptions } from 'src/config';

const onHealthCheck = async (request: Express.Request) => 'Working...';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req, res, connection, ...rest }, ...other) => {
		return {
			req,
			res,
			connection,
		};
	},
	onHealthCheck,
});

(async function () {
	// try {
	// Connect TO DB
	// const dbConnection = await createConnection(ConnectionOptions);

	// if (dbConnection.isConnected) {
	try {
		// When Connected Start Server
		const { url } = await server.listen(process.env.PORT);

		console.log(`Server running at ${url}`);
	} catch (error) {
		console.log('Failed To Load Server', error);
	}
	// }
	// } catch (error) {
	// 	console.log('Failed To Connect To DB');
	// }
})();
