import express from 'express';
import dotenv from 'dotenv'
import { MongoClient } from 'mongodb';
import initDB from '../db';
import productRouter from './products/routes';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3004;

MongoClient.connect(process.env.DB_URL, { useUnifiedTopology: true }).then(client => {
  console.log("connected succesfully to db");
  const db = client.db(process.env.DB_NAME);
  return initDB(db);
}).then(db => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(express.static('public'));
  app.use('/products', productRouter(db));
  app.get('/', (req, res) => res.send('hi'));
  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
  })
})

