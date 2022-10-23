import React, { PureComponent } from 'react';

class AboutUs extends PureComponent {
  render() {
    return (
      <section className="py-4 bg-white sm:py-10 md:px-0">
        <div className="container items-center max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-3 xl:gap-6 my-2 lg:my-3 xl:my-6">
            <div className="relative bg-black shadow-xl border-4 border-black overflow-hidden">
              <div className="w-full h-full">
                <img
                  src="/images/giay-chung-nhan.jpeg"
                  className="object-cover w-full" alt="Khách sạn Heaven - Đà Nẵng" />
              </div>
            </div>
            <div className="relative bg-black shadow-xl border-4 border-black overflow-hidden">
              <div className="w-full h-full">
                <img src="/images/giay-chung-nhan-doca.jpeg"
                  className="object-cover w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default AboutUs
