import React, { PureComponent } from 'react';

import { contactPhone, contactEmail } from 'Utils/constants';

class SectionContact extends PureComponent {
  render() {
    return (
      <section className="bg-gray-50">
        <div
          className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Bạn muốn đặt hàng?</span>
            <span className="block text-yellow-500">Liên hệ ngay với chúng tôi.</span>
          </h2>
          <div className="relative flex flex-col sm:flex-row sm:space-x-4 mt-10">
            <div className="inline-flex rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md mb-3 sm:mb-0">
              <a href={`tel:${contactPhone}`}
                 className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md text-white bg-yellow-500 hover:bg-yellow-600">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                     strokeLinejoin="round" className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {contactPhone}
              </a>
            </div>
            <div
              className="w-full sm:w-auto sm:ml-3 inline-flex rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md shadow">
              <a href={`mailto:${contactEmail}`}
                 className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md text-yellow-500 bg-gray-100 hover:bg-yellow-50">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                     strokeLinejoin="round" className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionContact;
