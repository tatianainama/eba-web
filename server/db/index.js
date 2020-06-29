import PRODUCTS from './products.json';
import DISTRIBUTORS from './distributors.json';

const createCollection = (db) => async (collectionName, data) => {
  db.createCollection(collectionName, {
    collation: { locale: 'es' }
  });
  const col = db.collection(collectionName);
  try {
    const results = await col.find({}).toArray();
    if (!results.length) {
      console.log(`creating ${collectionName}...`);
      await col.insertMany(data)
      console.log(`${collectionName} created correctly`);
    }
  } catch(error) {
    throw new Error(`Error creating collection ${collectionName}: ${error}`);
  }
}

const initDB = async (db) => {
  await createCollection(db)('products', PRODUCTS);
  await createCollection(db)('distributors', DISTRIBUTORS);
}

export default initDB;