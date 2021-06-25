import { format } from "date-fns";
import Tabs from "sanity-plugin-tabs";
import { MdLocalMovies } from 'react-icons/md'
export default {
    name: "content",
      type: "object",
      inputComponent: Tabs,

      fieldsets: [
        { name: "CampaignDetails", title: "Campaign Details",options: { sortOrder: 10 }  },
        { name: "AnalyticsDetails", title: "Analytics Details",options: { sortOrder: 20 }},
        { name: "CampaignContent", title: "Campaign Content" ,options: { sortOrder: 30 }},
      ],

       fields: [
    {
      name: "title",
      type: "string",
      title: "Campaign Title",
      description: "What is name of your campaign",
	  icon: MdLocalMovies,
	  fieldset: "CampaignDetails",
    },
    {
      name: "rootUrl",
      type: "string",
      title: "Home page or Campaign root URL",
      description: "Provide the url of brand website",
	  fieldset: "CampaignDetails",
    },
    {
      name: "slug",
      type: "slug",
      title: "Campaign Url",
      description:"This will be the url of campaign page",
      options: {
        source: "content.title",
        maxLength: 96,
      },
	  fieldset: "CampaignDetails",
    },
    {
      name: "brand",
      type: "reference",
      title: "Brand",
      to: [{ type: 'brand' }],
	  fieldset: "CampaignDetails",
    },
    {
      name: "locale",
      type: "string",
      title: "Locale",
	  fieldset: "CampaignDetails",
    },
    {
      name: "country",
      type: "reference",
      title: "Country",
      to: [{ type: 'country' }],
	  fieldset: "CampaignDetails",
    },
    {
      name: "component",
      type: "array",
      title: "Create Header & Footer of the page",
      fieldset: "CampaignContent",
      of: [
        {type: "header"},
        {type: "footer"},
      ],
    },
    {
      name: "bodyComponent",
      type: "array",
      title: "Create/Order body component for page",
      fieldset: "CampaignContent",
      of: [
        {type: "bannerSlider"},
        {type: "productSlider"},
      ],
    },
    {
      name: "gaID",
      type: "string",
      title: "Google Analytics ID",
	  fieldset: "AnalyticsDetails",
    },
	 {
      name: "reportSuiteID",
      type: "string",
      title: "Report Suite ID",
	  fieldset: "AnalyticsDetails",
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "This can be used to schedule post for publishing",
	   fieldset: "CampaignContent",
    },
  ]
  };