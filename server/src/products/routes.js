import { Router } from 'express';
import { getAllProducts, getProduct, getByCategory} from './controller';

const ProductRouter = (db) => {
  const router = Router();
  router.get('/', getAllProducts(db));
  router.get('/category/:category', getByCategory(db));
  router.get('/:productName', getProduct(db));
  return router;
};

export default ProductRouter;