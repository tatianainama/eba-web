import DATA from './products.json';

const initDB = async (db) => {
  db.createCollection('products', {
    collation: { locale: 'es' }
  });

  const col = db.collection('products');
  col.find({}).toArray().then(result => {
    if(!result.length) {
      col.insertMany(DATA).then(insertResult => {
        console.log('products collection created correctly')
      })
    }
  });
  
}

export default initDB;