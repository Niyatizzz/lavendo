import express from 'express'

const app = express();
const port = process.env.PORT || 4000;

//middleware

app.use(express.json());

app.listen(port, () => {
    console.log(`server running on ${port}`)
});