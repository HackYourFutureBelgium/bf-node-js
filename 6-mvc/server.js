import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import dotenv from 'dotenv';

import homeRoutes from './routes/home.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);
const PORT = process.env.PORT || 3005;

// initialize express
const app = express();

// set template engine
app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));

// parse body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// serve static folder
app.use(express.static(path.join(PATH, 'public')));

// use routers
app.use(homeRoutes);

// handle 404
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page not Found!', path: '' });
});

// listen
app.listen(PORT, () => {
    console.log(`Server is up and running at port : ${PORT}`);
});

// https://dev.to/eetukudo_/understanding-mvc-pattern-in-nodejs-2bdn
