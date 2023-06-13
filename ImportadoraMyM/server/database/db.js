import { Sequelize } from "sequelize";

const db = new Sequelize('bd_importadoramym', 'root', '1234', {
    host: 'localhost',
    port:'3308',
    dialect: 'mysql'
})

export default db