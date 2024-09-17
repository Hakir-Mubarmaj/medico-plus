// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md py-3 sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/"><img src="https://i.ibb.co/L82TVpF/logo-removebg-preview.png" alt="Logo" className="h-12" /></Link>

        {/* Hamburger Menu */}
        <button className="text-gray-700 lg:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Navigation Links (desktop) */}
        <nav className="hidden lg:flex space-x-6">
          <ul className="flex justify-center items-center space-x-6">
            <li>
              <a href="#" className="text-gray-700 font-bold hover:text-teal-600"><Link to="/courses">প্রোগ্রামসমূহ</Link></a>
            </li>
            <li>
              <a href="#" className="text-gray-700 font-bold hover:text-teal-600"><Link to="/branch">শাখাসমূহ</Link></a>
            </li>
            <li>
              <a href="tel:+8801787-457944" className="text-gray-700 font-bold hover:text-teal-600 text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        {/* Login Button for large screens */}
        <button className="hidden lg:block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
          Login
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-14 right-0 bg-white shadow-lg w-full lg:hidden">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <a href="#" className="text-gray-700 font-bold hover:text-teal-600"><Link to="/courses">প্রোগ্রামসমূহ</Link></a>
              </li>
              <li>
                <a href="#" className="text-gray-700 font-bold hover:text-teal-600"><Link to="/branch">শাখাসমূহ</Link></a>
              </li>
              <li>
                <a href="tel:+8801787-457944" className="text-gray-700 font-bold hover:text-teal-600 text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300 w-full">
                  Login
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
