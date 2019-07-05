import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import appRouter from './app-router';

const app = express();

app.use(cors());
app.use(bodyParser.json());

// TODO register all modules here 
app.use(appRouter);

// handle all unfound routes
app.use('*', (req, res) => (
  res.status(404).json({
    message: 'Not Found'
  })
));

export default app;
