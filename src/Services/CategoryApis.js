import categoriesJson from 'Data/categories.json';

export default class CategoryApis {
  static getCategoryBySlug(slug) {
    return new Promise((resolve, reject) => {
      if (!slug) reject()
      const category = categoriesJson.data
        .find(category => category.slug === slug);
      resolve({ data: category })
    });
  }

  static getCategories() {
    return new Promise((resolve) => {
      const categories = categoriesJson.data;
      resolve({ data: categories })
    });
  }
}