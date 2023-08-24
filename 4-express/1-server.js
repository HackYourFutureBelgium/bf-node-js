import express from 'express';

// initialize express
const app = express();
const PORT = 3000;

// middleware
app.use((req, res, next) => {
    console.log('Hello there ');
    next();
});

// route
app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello there</h1>');
});

// listen
app.listen(PORT, () => {
    console.log(`Server is up and running at port : ${PORT}`);
});
