import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';

/*This line allows us to pool our environment variables from DOT Env file which I'll create soon*/
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
    res.send('Hello from DOWRA');
})

const startServer = async () => {

    try {
        //Special url of mongoDB atlas database.
        connectDB(process.env.MONGODB_URL);
        app.listen(3000, () => console.log('Server started on port http://localhost:3000'));
    }

    catch (error) {
        console.log(error);
        
    }

}

startServer();