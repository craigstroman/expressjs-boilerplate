import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import { addPath } from 'app-module-path';
import routes from './routes/routes';


const app = express();
const nodeEnv = process.env.NODE_ENV;

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.locals.title = 'ExpressJS ES6 bpilerplate';

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public'))
addPath(__dirname);

app.use(routes);

export default app;
