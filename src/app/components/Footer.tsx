import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto py-12 px-5">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full sm:w-1/3 mb-6">
            <h2 className="text-lg font-bold text-gray-200 mb-3">About Us</h2>
            <p className="text-sm">
              Welcome to our blog! We share insights, tutorials, and the latest trends in web development, design, and technology.
            </p>
          </div>

          {/* Categories / Links */}
          <div className="w-full sm:w-1/3 mb-6">
            <h2 className="text-lg font-bold text-gray-200 mb-3">Categories</h2>
            <ul>
              <li className="mb-2">
                <Link href="/category/web-development">
                  <span className="hover:text-white cursor-pointer">Web Development</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/category/design">
                  <span className="hover:text-white cursor-pointer">Design</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/category/tutorials">
                  <span className="hover:text-white cursor-pointer">Tutorials</span>
                </Link>
              </li>
              <li>
                <Link href="/category/technology">
                  <span className="hover:text-white cursor-pointer">Technology</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full sm:w-1/3 mb-6">
            <h2 className="text-lg font-bold text-gray-200 mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/HaroonRasheed" passHref>
                <span className="text-gray-400 hover:text-indigo-500 cursor-pointer">
                  <i className="fa fa-twitter"></i>
                </span>
              </Link>
              <Link href="https://facebook.com/HaroonRasheed" passHref>
                <span className="text-gray-400 hover:text-indigo-500 cursor-pointer">
                  <i className="fa fa-facebook"></i>
                </span>
              </Link>
              <Link href="https://instagram.com/HaroonRasheed" passHref>
                <span className="text-gray-400 hover:text-indigo-500 cursor-pointer">
                  <i className="fa fa-instagram"></i>
                </span>
              </Link>
              <Link href="https://linkedin.com/in/HaroonRasheed" passHref>
                <span className="text-gray-400 hover:text-indigo-500 cursor-pointer">
                  <i className="fa fa-linkedin"></i>
                </span>
              </Link>
            </div>

            {/* Subscribe Section */}
            <div className="mt-6">
              <h2 className="text-lg font-bold text-gray-200 mb-3">Subscribe to Our Newsletter</h2>
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-l-md bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="p-2 bg-indigo-500 text-white rounded-r-md hover:bg-indigo-600"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-2">
                Stay updated with the latest articles and resources.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Haroon Rasheed. All Rights Reserved.
          </p>
          <p className="text-sm mt-2">
            Built with using <span className="text-indigo-500">Next.js</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
