import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CategoryApis from 'Services/CategoryApis';
import CategoryGridItem from 'Components/CategoryGridItem';

function CategorySideHeader() {
  const { slug } = useParams();
  const [category, updateCategory] = useState(null);

  useEffect(() => {
    CategoryApis.getCategoryBySlug(slug).then(response => updateCategory(response.data));
    window.scrollTo(0, 0);
  }, [slug]);

  return <CategoryGridItem {...category}/>;
}

export default CategorySideHeader;
