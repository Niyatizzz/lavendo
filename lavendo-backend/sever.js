import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))

//db connect
connectDB();

//routes
app.get('/', (req, res) => {
    res.send('API working')
})

app.listen(port, () => {
    console.log(`server running on ${port}`)
});