import { format } from "date-fns";

export default {
  name: "imageCarousel",
  type: "document",
  title: "Image Carousel",
  fields: [
    {
        name: "title",
        type: "string",
        title: "CAROUSEL NAME",
        description: "Name is used to identify the carousel for page layout",
        validation: Rule => Rule.required()
    },
    {
        name: "autoSlide",
        type: "boolean",
        title: "MAKE BANNER CAROUSEL AUTO SWIPE",
        initialValue: false,
        description: "If you enable this then banner will swipe automatically",
    },
    {
        name: "bannerImages",
        type: "array",
        title: "Select banner images",
        description: "Please select banner images from drop dowm, if you want single hero image then select only one image",
        of: [{type: "figure"}]
      },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'bannerImages.0.bannerImage'
    }
  }
};
