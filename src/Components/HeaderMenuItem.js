import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class HeaderMenuItem extends PureComponent {
  render() {
    const { id, url, name } = this.props;

    return (
        <Link key={id} to={url}
          className="px-3 py-2 block rounded-md font-medium text-sm font-bold hover:text-yellow-500 ">
          <span>{name}</span>
        </Link>
    );
  }
}

export default HeaderMenuItem;
