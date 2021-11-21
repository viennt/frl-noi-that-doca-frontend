import productsJson from 'Data/products.json';

const PAGE_SIZE = 16;

export default class ProductApis {
  static getProducts(category = 'guong-phong-tam', page = 0) {
    return new Promise((resolve) => {
      const categoryProducts = productsJson.filter(product => product.category === category);
      const paginationProducts = categoryProducts.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
      resolve({ data: paginationProducts, length: Math.floor(categoryProducts.length / PAGE_SIZE) })
    });
  }

  static getFeatureProducts(limit = 60) {
    return new Promise((resolve) => {
      const featureProducts = productsJson
        .filter(product => product.feature)
        .slice(0, limit);
      resolve({ data: featureProducts })
    });
  }
}