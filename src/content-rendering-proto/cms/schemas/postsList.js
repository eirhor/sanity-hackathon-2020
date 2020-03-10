export default {
  title: "Posts List",
  name: "postsList",
  type: "array",
  of: [
    {
      type: "reference",
      to: [
        {
          type: "post"
        }
      ]
    }
  ]
};
