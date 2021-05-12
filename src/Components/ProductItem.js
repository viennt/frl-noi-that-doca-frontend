import React, { PureComponent } from 'react';

class ProductItem extends PureComponent {
  render() {
    const { id, name, description, image, size, price } = this.props;

    return (
      <div key={id} className="flex flex-col justify-between bg-white border border-solid border-gray-100 shadow-xl rounded-md overflow-hidden">
        <div className="w-full h-4/5 bg-gray-400">
          <img src={image} className="object-cover w-full h-full" alt=""/>
        </div>
        <div className="w-full px-2 pt-1 pb-2">
          <div className="block">
            <span className="text-sm font-bold">{name}</span>
            <span className="ml-1 text-xs text-yellow-500">{description}</span>
          </div>
          <div className="block">
            <span className="text-xs">{size}</span>
            <span className="text-yellow-500"> | </span>
            <span className="text-xs font-bold">{price}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
