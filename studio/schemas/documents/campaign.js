import { format } from "date-fns";

export default {
  name: "campaign",
  type: "document",
  title: "Campaign",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Campaign Title",
      description: "What is name of your campaign",
    },
    {
      name: "rootUrl",
      type: "string",
      title: "Home page or Campaign root URL",
      description: "Provide the url of brand website",
    },
    {
      name: "slug",
      type: "slug",
      title: "Campaign Url",
      description:"This will be the url of campaign page",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "brand",
      type: "string",
      title: "Brand"
    },
    {
      name: "locale",
      type: "string",
      title: "Locale"
    },
    {
      name: "country",
      type: "string",
      title: "Country"
    },
    {
      name: "componentLayout",
      type: "array",
      title: "Component Layout",
      description: "Please select component position and order",
      of: [
        {
          type: "reference",
          to: [{type: 'header'}, {type: 'footer'}, {type: 'bannerSlider'}, {type: 'productSlider'}]
        },
      ],
    },
    {
      name: "gaID",
      type: "string",
      title: "Google Analytics ID"
    }
  ]
};
