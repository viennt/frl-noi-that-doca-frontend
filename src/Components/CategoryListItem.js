import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class CategoryListItem extends PureComponent {
  render() {
    const { name, slug } = this.props;

    return (
      <Link to={`/san-pham/${slug}`} className="relative block text-gray-500 hover:text-black font-medium transition-colors h-10">
        <div className="flex items-center w-full h-full">{name}</div>
      </Link>
    );
  }
}

export default CategoryListItem;
