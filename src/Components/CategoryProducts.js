import React, { PureComponent } from 'react';

import NoItem from 'Components/NoItem';
import ProductItem from 'Components/ProductItem';
import ProductApis from 'Services/ProductApis';

class CategoryProducts extends PureComponent {
  state = {
    products: null
  }

  async componentDidMount() {
    const { data } = await ProductApis.getProducts();
    this.setState({ products: data })
  }

  render() {
    const { products } = this.state;
    return (
      <section className="bg-white">
        <div className="container items-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 lg:gap-3 xl:gap-6">
            {products && products.map(product => <ProductItem key={product.id} {...product} />)}
          </div>
          <NoItem show={products && !products.length} />
        </div>
      </section>
    );
  }
}

export default CategoryProducts;
