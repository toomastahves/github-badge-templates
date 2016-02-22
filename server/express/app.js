import express from 'express';
import favicon from 'serve-favicon';
import { applyMiddleware } from './applyMiddleware';

const app = express();
applyMiddleware(app);

app.use(express.static('public'));
app.use(favicon('public/favicon.ico'));

export default app;
