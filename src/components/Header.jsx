import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-3 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <img src="https://i.ibb.co.com/L82TVpF/logo-removebg-preview.png" alt="Logo" className="h-12" />
        <nav className="space-x-6">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-700 font-large hover:text-teal-600">প্রোগ্রামসমূহ</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 font-large hover:text-teal-600">শাখাসমূহ</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 font-large hover:text-teal-600">{'📚'}</a>
            </li>
          </ul>
        </nav>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300">Login</button>
      </div>
    </header>
  );
};

export default Header;
