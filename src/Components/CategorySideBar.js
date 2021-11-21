import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";

import CategorySideHeader from 'Components/CategorySideHeader';
import CategoryListItem from 'Components/CategoryListItem';
import CategoryApis from 'Services/CategoryApis';


const CategorySideBar = () => {
  const [categories, setCategories] = useState(null);
  const { slug } = useParams();

  useEffect(async () => {
    const { data } = await CategoryApis.getCategories();
    setCategories(data);
  }, [])

  return (
    <div className="flex flex-col space-y-6">
      <CategorySideHeader />
      <div className="hidden sm:block border border-solid border-gray-100 rounded-md overflow-hidden px-6">
        <div className="flex flex-col space-y-2 py-2">
          {categories && categories.map(category => (
            <CategoryListItem key={category.id} active={slug === category.slug} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySideBar;
