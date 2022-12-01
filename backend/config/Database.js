import { Sequelize } from "sequelize";

const db = new Sequelize('crud_db', 'root', 'Plaza7237247', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;