import { Rule } from "sanity";

export const post = {
     name: "post",
     title: "Post",
     type: "document",
     fields: [
          {
               name: "title",
               title: "Title",
               type: "string",
               validation: (Rule: Rule) =>
                    Rule.required().error("Expected a post title but got none"),
          },
          {
               name: "slug",
               title: "Slug",
               type: "slug",
               options: { source: "title" },
               validation: (Rule: Rule) =>
                    Rule.required().error("A slug is required"),
          },
          {
               name: "publisheddatetime",
               title: "Published On",
               type: "datetime",
               initialValue: new Date().toISOString(),
          },
          {
               name: "excerpt",
               title: "Excerpt",
               type: "text",
               validation: (Rule: Rule) =>
                    Rule.max(300).error(
                         "Expected a max of 300 characters but got more",
                    ),
          },
          {
               name: "overviewImage",
               title: "Title Image",
               type: "image",
               validation: (Rule: Rule) =>
                    Rule.required().error("An image is required"),
          },
          {
               name: "body",
               title: "Body",
               type: "array",
               of: [
                    { type: "block" },
                    {
                         type: "image",
                         fields: [{ type: "text", name: "alt", title: "Alt" }],
                    },
               ],
          },
          // {
          //      name: "author",
          //      title: "Author",
          // },
          {
               name: "tag",
               title: "Tag",
               type: "array",
               of: [{ type: "reference", to: [{ type: "tag" }] }],
          },
     ],
};
