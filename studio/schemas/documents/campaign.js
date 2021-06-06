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
      description:
        "This will be the url of campaign page",
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
      name: "brandLogo",
      type: "mainImage",
      title: "Brand Logo",
    },
    {
      name: "heroImage",
      type: "mainImage",
      title: "Banner Image",
    },
    {
      name: "product",
      type: "array",
      title: "Products",
      of: [
        {
          type: "reference",
          to: {
            type: "product",
          },
        },
      ],
    },
    {
      name: "gaID",
      type: "string",
      title: "Google Analytics ID"
    },
    {
      name: "privacyNotice",
      type: "string",
      title: "Privacy notice label"
    },
    {
      name: "privacyNoticeUrl",
      type: "string",
      title: "Privacy notice URL"
    },
    {
      name: "cookieNotice",
      type: "string",
      title: "Cookie notice label"
    },
    {
      name: "cookieNoticeUrl",
      type: "string",
      title: "Cookie notice Url"
    },
    {
      name: "tnc",
      type: "string",
      title: "Terms & Conditions label"
    },
    {
      name: "tncURL",
      type: "string",
      title: "Terms & Conditions Url"
    },
    {
      name: "customLink",
      type: "string",
      title: "Custom link label"
    },
    {
      name: "customLinkUrl",
      type: "string",
      title: "Custom link url"
    }
  ]
};
