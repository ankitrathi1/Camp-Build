import { format } from "date-fns";

export default {
    name: "country",
    type: "document",
    title: "Country",
    fields: [
        {
            name: "countryName",
            type: "string",
            title: "Country",
        },
        {
            name:"countryId",
            type:"string",
            title:"Country Id"
        }
    ],
    preview: {
      select: {
        title: 'countryName',
      }
    }
  };