import { format } from "date-fns";

export default {
  name: "socialChannel",
  type: "document",
  title: "Social Channel",
  fields: [
    {
        name: "title",
        type: "string",
        title: "Carousel Name",
        description: "Name is used to identify the slider for page layout",
    },
    {
        name: "socialChannel",
        type: "array",
        title: "SOCIAL MEDIA CHANNELS",
        of: [{type: "socialLink"}]
      },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `Social Channel`
      }
    }
  }
};
