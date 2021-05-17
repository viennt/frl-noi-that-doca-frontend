import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class CategoryGridItem extends PureComponent {
  render() {
    const { name, slug, image } = this.props;

    return (
      <Link
        to={`/san-pham/${slug}`}
        className="group relative block h-40 cursor-pointer bg-black shadow-xl rounded-md overflow-hidden">
        <div className="w-full h-full opacity-60">
          <img src={image} className="object-cover w-full h-full transition-transform transform group-hover:scale-110" alt=""/>
        </div>
        <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full">
          <div className="text-center text-white xs:text-lg sm:text-xl lg:text-xl font-bold uppercase">
            {name}
          </div>
        </div>
      </Link>
    );
  }
}

export default CategoryGridItem;
