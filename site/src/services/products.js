import GetData from './getData.js';

const getAll = () => {
  return GetData('/products').catch(error => {
    console.log(error);
    return []
  });
}

const getById = (id) => {
  return GetData(`/products/${id}`);
}

const getByCategory = (categoryName) => {
  return GetData('/products/category', { category: categoryName })
}

export {
  getAll,
  getById,
  getByCategory
}