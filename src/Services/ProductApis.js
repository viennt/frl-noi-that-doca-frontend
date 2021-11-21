import productsJson from 'Data/products.json';
const url = 'https://api.sheety.co/edbfaff861dbc3a6463ee6b4f446a9b6/noiThatDoca/products';

const PAGE_SIZE = 16;

export default class ProductApis {
  static getProducts(category = 'guong-phong-tam', page = 0) {
    if (process.env.NODE_ENV === 'development') {
      return new Promise((resolve) => {
        const categoryProducts = productsJson.filter(product => product.category === category);
        const paginationProducts = categoryProducts.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
        resolve({ data: paginationProducts, length: Math.floor(categoryProducts.length / PAGE_SIZE) })
      })

    } else {
      return fetch(url)
        .then((response) => response.json())
        .then(json => ({data: json.products}));
    }
  }

  static getFeatureProducts(limit = 60) {
    if (process.env.NODE_ENV === 'development') {
      return new Promise((resolve) => {
        const featureProducts = productsJson
          .filter(product => product.feature)
          .slice(0, limit);
        resolve({ data: featureProducts })
      })

    } else {
      return fetch(`${url}?filter[feature]=true`)
        .then((response) => response.json())
        .then(json => ({data: json.products}));
    }
  }
}