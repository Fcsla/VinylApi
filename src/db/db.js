const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
        console.log("Conectado ao banco de dados.")
        mongoose.Promise = global.Promise;
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;