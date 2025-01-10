import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gradient-to-b from-gray-100 via-white to-gray-100">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg shadow-lg"
            alt="hero"
            src="https://via.placeholder.com/720x600.png?text=Your+Image+Here"
            width={720}
            height={600}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
             About Me
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700 text-lg">
              Hello, I am Haroon Rasheed, a passionate Web Developer specializing in creating modern, responsive, and visually appealing websites.
              I have expertise in <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span>, <span className="font-semibold">JavaScript</span>, <span className="font-semibold">TypeScript</span>, <span className="font-semibold">Next.js</span>, and <span className="font-semibold">Tailwind CSS</span>, along with <span className="font-semibold">Node.js</span>, <span className="font-semibold">React.js</span>, <span className="font-semibold">Git</span>, and <span className="font-semibold">GitHub</span>.
              Ready to bring your ideas to life? Let’s build something extraordinary together!
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 justify-center w-full">
              <button className="inline-flex text-white bg-gradient-to-r from-indigo-500 to-purple-600 border-0 py-2 px-8 focus:outline-none hover:from-purple-600 hover:to-indigo-500 rounded-full text-lg shadow-lg mb-4 sm:mb-0">
                Learn More
              </button>
              <Link href="/contact" className="inline-flex text-gray-900 bg-gray-200 border-0 py-2 px-8 focus:outline-none hover:bg-gray-300 rounded-full text-lg shadow-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
