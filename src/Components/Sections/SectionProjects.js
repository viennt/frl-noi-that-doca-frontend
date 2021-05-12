import React, { PureComponent } from 'react';

class SectionProjects extends PureComponent {
  render() {
    return (
      <section className="py-4 bg-white sm:py-10 md:px-0">
        <div className="container items-center max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="w-full sm:max-w-md lg:max-w-lg pb-2 sm:pb-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
              <span className="uppercase">Khách hàng dự án của chúng tôi</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-3 xl:gap-6">
            <div className="relative bg-black shadow-xl rounded-md overflow-hidden">
              <div className="w-full h-full">
                <img src="/images/projects/nha-khach-quoc-hoi-da-nang.jpg"
                     className="object-cover w-full" alt="Nhà khách quốc hội - Đà Nẵng"/>
              </div>
              <div
                className="flex items-end justify-center absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 w-full h-full p-4">
                <div className="text-center text-white text-lg font-bold capitalize">Nhà khách quốc hội - <span className="whitespace-nowrap">Đà Nẵng</span></div>
              </div>
            </div>
            <div className="relative bg-black shadow-xl rounded-md overflow-hidden">
              <div className="w-full h-full">
                <img src="/images/projects/khach-san-northerm-da-nang.jpg"
                     className="object-cover w-full" alt="Khách sạn Northerm - Đà Nẵng"/>
              </div>
              <div
                className="flex items-end justify-center absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 w-full h-full p-4">
                <div className="text-center text-white text-lg font-bold capitalize">Khách sạn Northerm - <span className="whitespace-nowrap">Đà Nẵng</span></div>
              </div>
            </div>
            <div className="relative bg-black shadow-xl rounded-md overflow-hidden">
              <div className="w-full h-full">
                <img src="/images/projects/khach-san-heaven-da-nang.jpg"
                     className="object-cover w-full" alt="Khách sạn Heaven - Đà Nẵng"/>
              </div>
              <div
                className="flex items-end justify-center absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 w-full h-full p-4">
                <div className="text-center text-white text-lg font-bold capitalize">Khách sạn Heaven - <span className="whitespace-nowrap">Đà Nẵng</span></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-3 xl:gap-6 my-2 lg:my-3 xl:my-6">
            <div className="relative bg-black shadow-xl rounded-md overflow-hidden">
              <div className="w-full h-full">
                <img
                  src="/images/projects/khach-san-resort-vinh-hung-hoi-an.jpg"
                  className="object-cover w-full" alt="Khách sạn Heaven - Đà Nẵng"/>
              </div>
              <div
                className="flex items-end justify-center absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 w-full h-full p-4">
                <div className="text-center text-white text-lg font-bold capitalize">Khách sạn resort Vĩnh Hưng - <span className="whitespace-nowrap">Hội An</span></div>
              </div>
            </div>
            <div className="relative bg-black shadow-xl rounded-md overflow-hidden">
              <div className="w-full h-full">
                <img src="/images/projects/khach-san-thanh-binh-4-hoi-an.jpg"
                     className="object-cover w-full" alt=""/>
              </div>
              <div
                className="flex items-end justify-center absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 w-full h-full p-4">
                <div className="text-center text-white text-lg font-bold capitalize">Khách sạn Thanh Bình 4 - <span className="whitespace-nowrap">Hội An</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionProjects;
