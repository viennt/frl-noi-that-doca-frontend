import React, { PureComponent } from 'react';

import NoItem from 'Components/NoItem';
import ProductItem from 'Components/ProductItem';
import ProductApis from 'Services/ProductApis';

class SectionFeatureProducts extends PureComponent {
  state = {
    products: null
  }

  async componentDidMount() {
    const { data } = await ProductApis.getFeatureProducts();
    this.setState({ products: data })
  }

  render() {
    const { products } = this.state;
    return (
      <section className="py-4 bg-white sm:py-10 md:px-0">
        <div className="container items-center max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="w-full pb-2 sm:pb-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
              <span className="uppercase">Sản Phẩm Nổi Bật</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-3 xl:gap-6">
            {products && products.map(product => <ProductItem key={product.id} {...product} />)}
          </div>
          <NoItem show={products && !products.length} />
        </div>
      </section>
    );
  }
}

export default SectionFeatureProducts;
