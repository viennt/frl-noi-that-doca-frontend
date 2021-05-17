import React, { PureComponent } from 'react';

import TwoColumns from 'Components/Layouts/TwoColumns';
import CategorySideBar from 'Components/CategorySideBar';
import CategoryProducts from 'Components/CategoryProducts';

class SingleCategory extends PureComponent {
  render () {
    return (
      <TwoColumns
        renderSide={<CategorySideBar />}
        renderMain={<CategoryProducts />}
      />
    );
  }
}
export default SingleCategory;
