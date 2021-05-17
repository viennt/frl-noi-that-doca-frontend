import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class HeaderMenuItem extends PureComponent {
  render() {
    const { id, url, name } = this.props;

    return (
      <div key={id} className="relative">
        <Link to={url}
           aria-expanded="false"
           className="inline-flex items-center uppercase text-sm font-bold hover:text-yellow-500 transition-colors">
          <span>{name}</span>
        </Link>
      </div>
    );
  }
}

export default HeaderMenuItem;
