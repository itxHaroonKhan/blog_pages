// schemas/blogPost.js
export const blogPost = {
    name: 'blogPost', // Unique identifier for the schema
    title: 'Blog Post', // Display title in Sanity Studio
    type: 'document', // Type of schema
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string', // Field type
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title', // Automatically generate slug from title
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enable image cropping
        },
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }], // Rich text content
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
      },
    ],
  };
  