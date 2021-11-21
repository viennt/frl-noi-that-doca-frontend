import React, { PureComponent } from 'react';

class ProductItem extends PureComponent {
  render() {
    const { name, description, image, fitWidth = false, fitHeight = false, size, price, sus404 } = this.props;
    const imageFitClass = fitWidth ? 'w-full' : fitHeight ? 'h-full' : 'w-full h-full';

    if (!name) {
      return <div className="flex flex-col justify-between bg-white overflow-hidden" />
    }

    return (
      <div className="flex flex-col justify-between border border-solid border-gray-200 rounded-md bg-white overflow-hidden">
        <div className="flex items-start justify-center w-full h-4/5 max-h-80">
          <img src={image} className={`object-cover ${imageFitClass} max-w-full max-h-full`} alt={name} />
        </div>
        <div className="relative w-full rounded-bl-md rounded-br-md px-2 pt-1 pb-2">
          {sus404 && (
            <img
              src="/images/sus304.png"
              className="absolute top-0 right-1 w-6 h-6"
              alt={name}
            />
          )}
          <div className="block">
            <span className="text-sm font-bold">{name}</span>
            <span className="ml-1 text-xs text-yellow-500">{description}</span>
          </div>
          <div className="block">
            <span className="text-xs">{size}</span>
            <span className="text-yellow-500"> | </span>
            <span className="text-xs font-bold">{price ? `${price}đ` : 'Giá liên hệ'}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
