import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blog = await client.fetch(
    `*[_type == "back" && slug.current == $slug][0]{
      title,
      "image": image.asset->url,
      author->{
        name,
        bio,
        "authorImage": image.asset->url
      },
      content,
      publishedAt
    }`,
    { slug: slug }
  );

  if (!blog)
    return (
      <div>
        <h1>Blog not found</h1>
      </div>
    );

  return (
    <article className="px-6 py-8 max-w-4xl mx-auto">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{blog.title}</h1>

      {/* Blog Image */}
      <Image
        src={blog.image}
        alt={blog.title}
        width={1200}
        height={600}
        className="rounded-lg w-full mb-6"
      />

      {/* Author Section */}
      <div className="flex items-center gap-6 mb-6">
        {/* Author Image */}
        <Image
          src={blog.author.authorImage}
          alt={blog.author.name}
          width={60}
          height={60}
          className="w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700"
        />
        {/* Author Name and Bio */}
        <div>
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-300">{blog.author.name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-1">
            {blog.author.bio}
          </p>
        </div>
      </div>

      {/* Publish Date */}
      <p className="text-sm text-gray-500 mb-4">
        Published on: {new Date(blog.publishedAt).toLocaleDateString()}
      </p>

      {/* Blog Content */}
      <div className="prose max-w-none dark:prose-invert">
        <PortableText value={blog.content} />
      </div>
    </article>
  );
}
