export default {
  name: "landing",
  title: "Landing",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "isstartpage",
      title: "Is start page",
      type: "boolean"
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    },
    {
      name: "postsList",
      title: "Posts List",
      type: "postsList"
    }
  ]
};
