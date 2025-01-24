import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Site title */}
          <a className="navbar-brand" href="#">
            ZeroCup Waste
          </a>
          {/* Home title as a link */}
          <Link to="/" className="navbar-title">
            Home
          </Link>
        </div>
      </nav>
      <style jsx>{`
        .navbar {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 1rem;
        }

        .navbar-brand {
          font-size: 1.5rem;
          font-weight: bold;
          color: #00d1b2;
          margin: 0;
          text-decoration: none;
        }

        .navbar-title {
          font-size: 1.2rem;
          color: #6c757d;
          font-weight: 500;
          text-decoration: none;
          margin-left: 2rem;
        }

        .navbar-title:hover {
          color: #00d1b2;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
