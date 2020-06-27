const getAllProducts = (db) => (req, res, next) => {
  const collection = db.collection('products');
  return collection.find({}).toArray()
  .then(products => {
    res.json(products);
  }).catch(error => {
    res.status(500).json({error: error})
  })
}

export {
  getAllProducts,
}