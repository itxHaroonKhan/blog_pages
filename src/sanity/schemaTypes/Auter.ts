import { defineType } from "sanity";

export const author = defineType({
  name: "author", // unique identifier for the schema
  title: "Author", // display title in the Sanity Studio
  type: "document", // specifies that this is a document schema
  fields: [
    {
      name: "name", // field for author's name
      title: "Name",
      type: "string", // data type for the field
    },
    {
      name: "bio", // field for a short biography
      title: "Bio",
      type: "text", // type for longer text content
    },
    {
      name: "image", // field for an image of the author
      title: "Image",
      type: "image", // data type for images
      options: {
        hotspot: true, // allows cropping of the image
      },
    },
    {
      name: "slug", // field for the slug (used in URLs)
      title: "Slug",
      type: "slug",
      options: {
        source: "name", // automatically generates the slug from the name field
        maxLength: 96,
      },
    },
  ],
});
