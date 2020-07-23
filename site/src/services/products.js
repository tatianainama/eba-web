import GetData from './getData.js';

const getAll = () => {
  return GetData('products').catch(error => {
    console.log(error);
    return []
  });
}

const getByName = (name) => {
  return GetData(`products/${name}`);
}

const getByCategory = (categoryName) => {
  return GetData(`products/category/${categoryName || 'all'}`)
}

export {
  getAll,
  getByName,
  getByCategory
}