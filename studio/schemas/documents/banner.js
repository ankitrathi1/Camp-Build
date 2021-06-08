import { format } from "date-fns";

export default {
  name: "banner",
  type: "document",
  title: "Banner",
  fields: [
    {
        name: "title",
        type: "string",
        title: "Banner Title",
        validation: Rule => Rule.required()
    },
    {
      name: "bannerImage",
      type: "mainImage",
      title: "Banner image",
    },
  ]
};
