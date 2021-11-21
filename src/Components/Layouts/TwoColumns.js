import React, { PureComponent } from 'react';

class TwoColumns extends PureComponent {
  render() {
    const { renderSide, renderMain } = this.props;

    return (
      <section className="py-4 bg-white sm:py-10 md:px-0">
        <div className="container items-center max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 sm:gap-3 lg:gap-3 xl:gap-6">
            <div className="pb-3 sm:pb-0">{renderSide}</div>
            <div className="col-span-3">{renderMain}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default TwoColumns;
