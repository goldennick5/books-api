import { Sequelize } from 'sequelize'

const sequelizeConnection = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
  }
)

export default sequelizeConnection;