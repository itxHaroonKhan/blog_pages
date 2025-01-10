import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-gray-800 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo or Brand Name */}
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-2xl text-indigo-500 font-bold">Haroon Rasheed</span>
          </a>
          
         

<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
  <ul className="flex space-x-5">
    <li>
      <Link href="/"
         className="hover:text-indigo-400 text-white font-medium">Home
      </Link>
    </li>
    <li>
      <Link href="/about"
         className="hover:text-indigo-400 text-white font-medium">About
      </Link>
    </li>
    <li>
      <Link href="/blog"
         className="hover:text-indigo-400 text-white font-medium">Blog
      </Link>
    </li>
    <li>
      <Link href="/contact"
         className="hover:text-indigo-400 text-white font-medium">Contact
      </Link>
    </li>
  </ul>
</nav>




        </div>
      </header>
    </div>
  );
};

export default Header;
