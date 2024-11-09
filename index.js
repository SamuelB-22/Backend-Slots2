import { sequelize } from "./database.js";
import app from "./app.js";

async function main() {
    try{
        await sequelize.sync({force: false})
        app.listen(5000);
        console.log('Server on port ', );
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();