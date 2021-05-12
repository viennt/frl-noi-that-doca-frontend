import React, { PureComponent } from 'react';

class CategoryGridItem extends PureComponent {
  render() {
    const { id, name, slug, image } = this.props;

    return (
      <div key={id} href={slug} className="relative h-40 cursor-pointer bg-black shadow-xl rounded-md overflow-hidden">
        <div className="w-full h-full opacity-60">
          <img src={image} className="object-cover w-full h-full" alt=""/>
        </div>
        <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full">
          <div className="text-center text-white xs:text-lg sm:text-xl lg:text-xl font-bold uppercase">
            {name}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryGridItem;
