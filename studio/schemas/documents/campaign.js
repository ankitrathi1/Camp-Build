import Tabs from "sanity-plugin-tabs";
import { format } from "date-fns";

export default {
  name: "campaign",
  type: "document",
  title: "Campaign",
  fields: [
    {
      name: "tabs",
      type: "object",
      inputComponent: Tabs,
      fieldsets: [
        { name: "First", title: "First" },
        { name: "Second", title: "Second" },
        { name: "Third", title: "Third"}
      ],
      options: {
        // setting layout to object will group the tab content in an object fieldset border.
        // ... Useful for when your tab is in between other fields inside a document.
        layout: "object"
      },
      fields: [
        {
          name: "title",
          type: "string",
          title: "Campaign Title",
          description: "What is name of your campaign",
          fieldset: "First",
        },
        {
          name: "rootUrl",
          type: "string",
          title: "Home page or Campaign root URL",
          description: "Provide the url of brand website",
          fieldset: "First",
        },
        {
          name: "slug",
          type: "slug",
          title: "Campaign Url",
          description:"This will be the url of campaign page",
          options: {
            // setting layout to object will group the tab content in an object fieldset border.
            // ... Useful for when your tab is in between other fields inside a document.
            layout: "object"
          },
          fieldset: "First",
        },
        {
          name: "brand",
          type: "string",
          title: "Brand",
          fieldset: "First",
        },
        {
          name: "locale",
          type: "string",
          title: "Locale",
          fieldset: "First",
        },
        {
          name: "country",
          type: "string",
          title: "Country",
          fieldset: "First",
        },
        {
          name: "componentLayout",
          type: "array",
          title: "Component Layout",
          description: "Please select component position and order",
          fieldset: "Second",
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
          title: "Google Analytics ID",
          fieldset: "Second",
        },
        {
          name: "publishedAt",
          type: "datetime",
          title: "Published at",
          description: "This can be used to schedule post for publishing",
        },
      ]
     
    }
  ],
  preview: {
    select: {
      title: 'tabs.title',
      subtitle: 'tabs.rootUrl',
      
    }
  }
 
  
 
  
};
