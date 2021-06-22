import { format } from "date-fns";

export default {
  name: "productSlider",
  type: "document",
  title: "Product Slider",
  fields: [
    {
        name: "title",
        type: "string",
        title: "Product slider/list name",
        validation: Rule => Rule.required()
    },
    {
      name: "heading",
      type: "string",
      title: "Heading Text",
      description: "Provide product carousel/list heading",
      validation: Rule => Rule.required()
    },
    {
      name: "headingLevel",
      type: "string",
      title: "Heading Level",
      description: "If left blank, defaults to H1. The page must have a H1, and subsequent heading must be H2",
      options: {
        list: [ 
          { title: 'H1', value: 'H1'},
          { title: 'H2', value: 'H2'},
          { title: 'H3', value: 'H3'},
          { title: 'H4', value: 'H4'},
          { title: 'H5', value: 'H5'},
          { title: 'H6', value: 'H6'},
        ]
      }
    },
    {
        name: "introText",
        type: "string",
        title: "Introduction Text",
        description: "Provide heading introduction text (optional)"
      },
      {
        name: "displayFormat",
        type: "string",
        title: "Display format carousel / List",
        initialValue: "list",
        options: {
            list: [ 
              { title: 'Carousel', value: 'carousel'},
              { title: 'List', value: 'list'}
            ]
          }
      },
    {
      name: "product",
      type: "array",
      title: "Select Products",
      of: [
        {
          type: "reference",
          to: {
            type: "product",
          },
        },
      ],
    }
  ]
};
