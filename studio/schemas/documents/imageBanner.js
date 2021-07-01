import { format } from "date-fns";

export default {
  name: "imageBanner",
  type: "document",
  title: "Image Banner",
  fields: [
    {
        name: "title",
        type: "string",
        title: "BANNER",
        description: "Name is used to identify the slider for page layout",
        validation: Rule => Rule.required()
    },
    {
        name: "bannerImages",
        type: "figure",
        title: "SELECT BANNER IMAGE",
      },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'bannerImages.0.bannerImage'
    }
  }
};
