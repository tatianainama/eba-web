import { Router } from 'express';
import { getAllProducts, getProduct } from './controller';

const ProductRouter = (db) => {
  const router = Router();
  router.get('/', getAllProducts(db));
  router.get('/:productId', getProduct(db));
  return router;
};

export default ProductRouter;