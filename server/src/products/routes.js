import { Router } from 'express';
import { getAllProducts } from './controller';

const ProductRouter = (db) => {
  const router = Router();
  router.get('/', getAllProducts(db));
  return router;
};

export default ProductRouter;