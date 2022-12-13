import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Trip = db.define('trip', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    penilaian: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
}, {
    freezeTableName: true
})

export default Trip;

(async() => {
    await db.sync();
})();