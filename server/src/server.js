import express from 'express';
import dotenv from 'dotenv'
import { MongoClient } from 'mongodb';
import initDB from '../db';
import productRouter from './products/routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3004;

MongoClient.connect(process.env.DB_URL, { useUnifiedTopology: true }).then(client => {
  console.log("connected succesfully to db");
  const db = client.db(process.env.DB_NAME);
  initDB(db);
  return db;
}).then(db => {
  app.use('/products', productRouter(db));
  app.get('/', (req, res) => res.send('hi'));
  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
  })
})

