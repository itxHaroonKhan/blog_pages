import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";









// Define the type for fetched data
interface BlogPost {
  title: string;
  slug: { current: string };
  imageUrl: string;
  category: string;
  content?: { children?: { text?: string }[] }[];
  publishedAt: string;
}

async function getdata(): Promise<BlogPost[]> {
  const fetchedData = await client.fetch(`*[_type == "blogPost"]{
      title,
      slug,
      "imageUrl": image.asset->url,
      category,
      content,
      publishedAt
    }`);
  return fetchedData;
}

const blog = async () => {
  const cards = await getdata();

  return (
    <section className="text-gray-600 body-font">



      {/* Cards Section */}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {cards.map((card) => (
            <div
              key={card.slug.current}
              className="p-4 md:w-1/3 transition-transform duration-300 transform hover:scale-105"
            >
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={card.imageUrl}
                  alt={card.title}
                  width={500}
                  height={500}
                />
                <div className="p-6 bg-white">
                  <h2 className="tracking-widest text-sm title-font font-semibold text-indigo-500 mb-1 uppercase">
                    {card.category}
                  </h2>
                  <h1 className="title-font text-2xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h1>
                  <p className="leading-relaxed mb-5 text-gray-700 text-sm line-clamp-5 ">
                    {card.content?.[0]?.children?.[0]?.text || "No description available."}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/blog/${card.slug.current}`}
                      className="text-indigo-500 hover:underline text-sm font-medium"
                    >
                      Learn More
                    </Link>
                    <span className="text-gray-400 text-xs font-light">
                      {Math.floor(Math.random() * 100000)} views
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default blog;
