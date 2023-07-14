import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/active-notes" className="link-nav">
            Active Notes
          </Link>
        </li>
        <li>
          <Link to="/archived-notes" className="link-nav">
            Archived Notes
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
