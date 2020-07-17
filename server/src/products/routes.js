import { Router } from 'express';
import { getAllProducts, getProduct, getByCategory} from './controller';

const ProductRouter = (db) => {
  const router = Router();
  router.get('/', getAllProducts(db));
  router.get('/category', getByCategory(db));
  router.get('/:productId', getProduct(db));
  return router;
};

export default ProductRouter;