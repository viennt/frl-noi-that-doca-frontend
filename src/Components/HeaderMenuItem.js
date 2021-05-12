import React, { PureComponent } from 'react';

class HeaderMenuItem extends PureComponent {
  render() {
    const { id, url, name } = this.props;

    return (
      <div key={id} className="relative">
        <a href={url}
           aria-expanded="false"
           className="hover:text-yellow-500 inline-flex items-center uppercase text-sm font-bold hover:text-yellow-500">
          <span>{name}</span>
        </a>
      </div>
    );
  }
}

export default HeaderMenuItem;
