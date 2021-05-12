import React, { PureComponent } from 'react';

import { contactPhone, contactEmail } from 'Utils/constants';

class SectionFooter extends PureComponent {
  render() {
    return (
      <section className="relative bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/"
                 className="flex items-center text-sm font-bold sm:text-base text-gray-50 lg:w-auto lg:items-center lg:justify-center">
                <span className="whitespace-nowrap">Copyright @ {(new Date()).getFullYear()}</span>
                <span>&nbsp;</span>
                <span className="whitespace-nowrap">Doca - Sản phẩm cho mọi nhà</span>
              </a>
            </div>
            <nav className="hidden md:flex items-start space-x-10 text-right">
              <div className="relative text-sm text-gray-400">
                <span className="whitespace-nowrap"><strong>Hotline:</strong> <span>{contactPhone}</span></span>
                <span className="text-yellow-500"> | </span>
                <span className="whitespace-nowrap"><strong>E-mail:</strong> <span>{contactEmail}</span></span>
              </div>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionFooter;
