import productsJson from 'Data/products.json';
const url = 'https://api.sheety.co/edbfaff861dbc3a6463ee6b4f446a9b6/noiThatDoca/products';

export default class ProductApis {
  static getProducts() {
    if (process.env.NODE_ENV === 'development') {
      return new Promise((resolve) => {
        const featureProducts = productsJson.data
          .filter(product => product.feature);
        resolve({ data: featureProducts })
      })

    } else {
      return fetch(url)
        .then((response) => response.json())
        .then(json => ({data: json.products}));
    }
  }

  static getFeatureProducts(limit = 6) {
    if (process.env.NODE_ENV === 'development') {
      return new Promise((resolve) => {
        const featureProducts = productsJson.data
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