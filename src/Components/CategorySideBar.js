import React, { Component } from 'react';

import CategorySideHeader from 'Components/CategorySideHeader';
import CategoryListItem from 'Components/CategoryListItem';
import CategoryApis from 'Services/CategoryApis';


class CategorySideBar extends Component {
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
      <div className="flex flex-col space-y-6">
        <CategorySideHeader />
        <div className="hidden sm:block border border-solid border-gray-100 rounded-md overflow-hidden px-6">
          <div className="flex flex-col space-y-2 py-2">
            {categories && categories.map(category => <CategoryListItem key={category.id} {...category} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default CategorySideBar;
