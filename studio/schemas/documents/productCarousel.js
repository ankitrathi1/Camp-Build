import { format } from "date-fns";
import { MdViewCarousel } from 'react-icons/md'

export default {
  name: "productCarousel",
  type: "document",
  title: "Product Carousel",
  icon: MdViewCarousel,
  fields: [
    {
      name: "heading",
      type: "string",
      title: "HEADING TEXT",
      description: "Provide product carousel/list heading",
      validation: Rule => Rule.required()
    },
    {
      name: "headingLevel",
      type: "string",
      title: "HEADING LEVEL",
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
      type: "textEditor",
      title: "INTRODUCTION TEXT",
      description: 'Customize introduction text'
    },
    {
      name: "product",
      type: "product",
      title: "SELECT PRODUCT",
      type: "array",
      of: [{type: "productInput"}]
    }
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `${title} : Product Carousel`
      }
    }
  }
};
