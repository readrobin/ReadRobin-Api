import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const ConnectionOptions: MysqlConnectionOptions = {
	type: 'mysql',
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT || '3306'),
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	synchronize: false,
	logging: false,
	entities: [],
};

export default ConnectionOptions;
