
import Tabs from "sanity-plugin-tabs";
import { format } from "date-fns";
import { MdLocalMovies } from 'react-icons/md'
export default {
    name: "content",
      type: "object",
      inputComponent: Tabs,

      fieldsets: [
        { name: "CampaignDetails", title: "Campaign Details",options: { sortOrder: 10 }  },
        { name: "AnalyticsDetails", title: "Analytics Details",options: { sortOrder: 20 }},
        { name: "StyleDetails", title: "Header, Footer & Styling",options: { sortOrder: 30 }},
        { name: "CampaignContent", title: "Content" ,options: { sortOrder: 40 }},
        { name: "publishDetail", title: "Publish" ,options: { sortOrder: 50 }},
      ],
      options: {
        // setting layout to object will group the tab content in an object fieldset border.
        // ... Useful for when your tab is in between other fields inside a document.
        layout: "object"
      },
       fields: [
        {
          name: "brand",
          type: "reference",
          title: "BRAND",
          to: [{ type: 'brand' }],
          fieldset: "CampaignDetails",
        },
        {
          name: "locale",
          type: "string",
          title: "LOCALE",
          fieldset: "CampaignDetails",
        },
        {
          name: "country",
          type: "reference",
          title: "COUNTRY",
          to: [{ type: 'country' }],
          fieldset: "CampaignDetails",
        },
        {
          name: "title",
          type: "string",
          title: "CAMPAIGN TITLE",
          description: "What is name of your campaign",
        icon: MdLocalMovies,
        fieldset: "CampaignDetails",
        },
        {
          name: "rootUrl",
          type: "string",
          title: "HOME PAGE OR CAMPAIGN ROOT URL",
          description: "Provide the url of brand website",
        fieldset: "CampaignDetails",
        },
        {
          name: "gaID",
          type: "string",
          title: "GOOGLE ANALYTICS ID",
        fieldset: "AnalyticsDetails",
        },
      {
          name: "reportSuiteID",
          type: "string",
          title: "ADOBE ANALYTICS REPORT SUITES ID",
        fieldset: "AnalyticsDetails",
        },
        {
          name: "brandOoneTruseID",
          type: "string",
          title: "BRAND ONE TRUST ID",
          fieldset: "AnalyticsDetails",
        },
        {
          name: "style",
          type: "basicComponent",
          title: "Configure Header of the page",
          fieldset: "StyleDetails",
        },
      {
        name: "bodyComponent",
        type: "array",
        title: "CREATE/ORDER BODY COMPONENT FOR PAGE",
        fieldset: "CampaignContent",
        of: [
          {type: "imageBanner"},
          {type: "imageCarousel"},
          {type: "productCarousel"},
          {type: "productList"},
          {type: "socialChannel"}
        ],
      },
      {
        name: "slug",
        type: "slug",
        title: "CAMPAIGN URL",
        description:"This will be the url of campaign page",
        options: {
          source: "content.title",
          maxLength: 96,
        },
      fieldset: "publishDetail",
      },
      {
        name: "publishedAt",
        type: "datetime",
        title: "PUBLISH AT",
        description: "This can be used to schedule post for publishing",
        fieldset: "publishDetail",
      },
      {
        name: "unPublishedAt",
        type: "datetime",
        title: "UNPUBLISH AT",
        description: "This can be used to schedule post for unpublishing",
        fieldset: "publishDetail",
      },
    ]
  };