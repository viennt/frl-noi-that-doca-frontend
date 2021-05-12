import React, { PureComponent } from 'react';

class NoItem extends PureComponent {
  render() {
    const { show } = this.props;
    if (show) {
      return (
        <div className="flex items-center justify-center w-full h-48">
          <div className="text-4xl font-bold text-gray-300">No Item</div>
        </div>
      );
    }
    return null;
  }
}

export default NoItem;
