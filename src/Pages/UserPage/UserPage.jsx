import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-blue-500 p-4 fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white font-semibold text-xl">
            Your App
          </Link>
          <div className="lg:hidden relative z-10">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="lg:flex space-x-6 hidden">
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/search" className="text-white">
              Search
            </Link>
            <Link to="/book" className="text-white">
              Book
            </Link>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 p-4 bg-blue-500 z-20">
          <div className="block mb-2">
            <Link
              to="/"
              className="text-white"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </div>
          <div className="block mb-2">
            <Link
              to="/search"
              className="text-white"
              onClick={toggleMenu}
            >
              Search
            </Link>
          </div>
          <div className="block">
            <Link
              to="/book"
              className="text-white"
              onClick={toggleMenu}
            >
              Book
            </Link>
          </div>
        </div>
      )}
        <Outlet /> {/* Render child routes here */}
      {/* <div className="lg:block">
        <div className="container mx-auto p-4">
        </div>
      </div> */}
    </div>
  );
};

export default UserPage;