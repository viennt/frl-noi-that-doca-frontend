import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useParams, useLocation, useHistory } from 'react-router-dom';

import NoItem from 'Components/NoItem';
import ProductItem from 'Components/ProductItem';
import Pagination from 'Components/Pagination';
import ProductApis from 'Services/ProductApis';

const CategoryProducts = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(0);
  const [products, setProducts] = useState(null);
  const { slug } = useParams();
  const { search } = useLocation();
  const history = useHistory();

  useEffect(async () => {
    const { page: pageQuery = 1 } = queryString.parse(search);
    const { data, length } = await ProductApis.getProducts(slug, pageQuery - 1);
    setPage(pageQuery);
    setPageSize(length);
    setProducts(data);
  }, [slug, search]);

  const onChangePage = page => {
    history.push(page ? `?page=${page}` : '?');
  };

  return (
    <section className="bg-white">
      <div className="container items-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 lg:gap-3 xl:gap-6">
          {products && products.map(product => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
        <NoItem show={products && !products.length} />

        <Pagination activePage={page} pageSize={pageSize} onChangePage={onChangePage} />
      </div>
    </section>
  );
}

export default CategoryProducts;
