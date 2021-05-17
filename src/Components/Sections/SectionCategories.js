import React, { PureComponent } from 'react';

import CategoryGridItem from 'Components/CategoryGridItem';
import CategoryApis from 'Services/CategoryApis';

class SectionCategories extends PureComponent {
  state = {
    categories: null
  }

  async componentDidMount() {
    const { data } = await CategoryApis.getCategories();
    this.setState({ categories: data })
  }

  render() {
    const { categories } = this.state;

    return (
      <section className="py-4 bg-white sm:py-10 md:px-0">
        <div className="container items-center max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="w-full pb-2 sm:pb-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
              <span className="uppercase">Danh mục sản phẩm</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-3 xl:gap-6">
            {categories && categories.map(category => <CategoryGridItem key={category.id} {...category} />)}
          </div>
        </div>
      </section>
    );
  }
}

export default SectionCategories;
