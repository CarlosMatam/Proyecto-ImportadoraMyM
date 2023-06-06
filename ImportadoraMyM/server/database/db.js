import { Sequelize } from "sequelize";

const db = new Sequelize('BD_ImportadoraMyM', 'root', 'MortadelaJamonada$$$$', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db