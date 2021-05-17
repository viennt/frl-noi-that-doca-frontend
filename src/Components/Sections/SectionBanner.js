import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { contactPhone } from 'Utils/constants';

class SectionBanner extends PureComponent {
  render() {
    return (
      <section className="py-4 bg-white sm:py-10 md:px-0">
        <div className="container items-center max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col sm:flex-row flex-wrap items-center space-y-8 sm:space-y-0 sm:space-x-8">
            <div className="flex-1">
              <div className="w-full h-auto overflow-hidden shadow-xl rounded-xl bg-gray-100">
                <img src="/images/banner.jpg" alt="Theen Wind" className="max-h-96 w-full object-cover object-center"/>
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                  <span className="block">Nội Thất Doca</span>
                  <span className="text-yellow-500">Sản Phẩm Của Mọi Nhà</span>
                </h1>
                <p className="mt-4 lg:mx-auto text-base text-gray-500 text-justify sm:max-w-md lg:text-lg md:max-w-3xl">
                  Bằng cách kết hợp vật liệu cao cấp với các sản phẩm sáng tạo và dịch vụ hỗ trợ kỹ thuật xuất sắc, chúng
                  tôi đã cung ứng các sản phẩm phù hợp với kiến trúc nhà bạn, giúp cho ngôi nhà trở nên sang trọng và đẹp
                  hơn.</p>
                <p className="mt-4 lg:mx-auto text-base text-gray-500 text-justify sm:max-w-md lg:text-lg md:max-w-3xl">
                  Chúng tôi có thể đáp ứng mọi nhu cầu cho ngôi nhà bạn, và giúp bạn thoả mãn với mơ ước có một ngôi nhà
                  hoàn hảo nhất với nội thất ưng ý.</p>
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
                    <Link to="/san-pham"
                       className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md text-yellow-500 bg-gray-100 hover:bg-yellow-50">
                      Xem thêm
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionBanner;
