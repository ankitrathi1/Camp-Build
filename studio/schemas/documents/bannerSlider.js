import { format } from "date-fns";

export default {
  name: "bannerSlider",
  type: "document",
  title: "Banner Carousel/List",
  fields: [
    {
        name: "title",
        type: "string",
        title: "Banner Slider/List Name",
        validation: Rule => Rule.required()
    },
    {
        name: "autoSlide",
        type: "boolean",
        title: "Make banner slider auto slide/swipe",
        initialValue: false,
        description: "If you enable this then banner will swipe automatically",
    },
    {
        name: "bannerImages",
        type: "array",
        title: "Select banner images",
        description: "Please select banner images from drop dowm, if you want single hero image then select only one image",
        of: [
          {
            type: "reference",
            to: {
              type: "banner",
            },
          },
        ],
      },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'bannerImages.0.bannerImage'
    }
  }
};
