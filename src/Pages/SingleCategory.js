import React from 'react';

import TwoColumns from 'Components/Layouts/TwoColumns';
import CategorySideBar from 'Components/CategorySideBar';
import CategoryProducts from 'Components/CategoryProducts';

const SingleCategory = () => {
  return (
    <TwoColumns
      renderSide={<CategorySideBar />}
      renderMain={<CategoryProducts />}
    />
  );
}
export default SingleCategory;
