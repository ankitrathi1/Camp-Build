import { format } from "date-fns";

export default {
  name: "product",
  type: "document",
  title: "Products",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Product Name",
      description: "Titles should be catchy, descriptive, and not too long",
    },
    {
      name: "EAN",
      type: "string",
      title: "Product Ean",
      description: "What is the brand unique number",
    },
    {
      name: "productImage",
      type: "figure",
      title: "Product image",
    },
  ]
};
