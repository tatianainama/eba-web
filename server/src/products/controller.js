
import { ObjectID } from 'mongodb';

const getAllProducts = (db) => (req, res, next) => {
  const collection = db.collection('products');
  return collection.find({}).toArray()
  .then(products => {
    res.json(products);
  }).catch(error => {
    res.status(500).json({error: error})
  })
}

const getProduct = (db) => (req, res, next) => {
  const collection = db.collection('products');
  return collection.findOne({name: req.params.productName})
  .then(product => {
    res.json(product)
  }).catch(error => {
    res.status(500).json({error: error})
  })
}

const getByCategory = (db) => ({ params }, res) => {
  const collection = db.collection('products');
  const category = params.category;
  const query = category === 'all' ? {} : {
    category: { '$elemMatch': { '$eq': category }}
  }
  return collection.find(query).toArray().then(products => {
    res.json(products)
  }).catch(error => {
    res.status(500).json({error: error})
  })
}

export {
  getAllProducts,
  getProduct,
  getByCategory
}