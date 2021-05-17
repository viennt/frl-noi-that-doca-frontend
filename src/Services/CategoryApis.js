// import categoriesJson from 'Data/categories.json';
const url = 'https://api.sheety.co/edbfaff861dbc3a6463ee6b4f446a9b6/noiThatDoca/categories';


export default class CategoryApis {
  static getCategoryBySlug(slug) {
    return fetch(`${url}?filter[slug]=${slug}`)
      .then((response) => response.json())
      .then(json => ({ data: json.categories[0] }));

    // TODO: Use JSON instead
    // return new Promise((resolve, reject) => {
    //   if (!slug) reject()
    //   const category = categoriesJson.data
    //     .find(category => category.slug === slug);
    //   resolve({ data: category })
    // })
  }

  static getCategories() {
    return fetch(url)
      .then((response) => response.json())
      .then(json => ({ data: json.categories }));

    // TODO: Use JSON instead
    // return new Promise((resolve) => {
    //   const categories = categoriesJson.data;
    //   resolve({ data: categories })
    // })
  }
}