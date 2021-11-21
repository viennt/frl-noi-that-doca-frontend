import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import HeaderMenuItem from 'Components/HeaderMenuItem';

class SectionHeader extends PureComponent {
  state = {
    menus: [
      { id: uuidv4(), name: 'Trang chủ', url: '/' },
      { id: uuidv4(), name: 'Sản phẩm', url: '/san-pham/guong-phong-tam' },
      { id: uuidv4(), name: 'Giới thiệu', url: '/gioi-thieu' },
      { id: uuidv4(), name: 'Liên hệ', url: '/lien-he' },
    ]
  }

  render() {
    const { menus } = this.state;

    return (
      <section className="sticky top-0 z-50 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="flex items-center lg:w-auto lg:items-center lg:justify-center">
                <img className="h-14" alt="Doca" src="/images/logo.png"/>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button type="button"
                      className="bg-white rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                      aria-expanded="false">
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex items-start space-x-10">
              {menus.map(menu => <HeaderMenuItem key={menu.id} {...menu} />)}
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionHeader;
