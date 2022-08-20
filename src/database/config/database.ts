import { Options } from 'sequelize';

const config: Options = {
  username: 'root',
  password: '12345678',
  database: 'radar',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z'
  },
  logging: false,
}

export = config;