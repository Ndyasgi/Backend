import { Sequelize } from "sequelize";

const db = new Sequelize('db_triptrap', 'root','',{
    host: 'localhost',
    dialect: 'mysql',
});

export default db;