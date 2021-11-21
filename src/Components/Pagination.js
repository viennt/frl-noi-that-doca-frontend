import React from 'react';
import { range } from 'lodash';

const Pagination = ({ activePage, pageSize, onChangePage }) => {
  const pages = range(1, pageSize + 1);

  return (
    <div className="flex justify-center items-center w-full gap-2 mt-12 mb-8">
      {pages && pages.map(page => {
        const className = 'w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md';
        const activeClassName = +activePage === +page ? 'text-white bg-yellow-500' : 'bg-gray-200 hover:bg-gray-300';
        return (
          <button
            key={page}
            className={`${className} ${activeClassName}`}
            onClick={() => onChangePage(page)}
          >
            { page }
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
