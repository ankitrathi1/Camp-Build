
import { format } from "date-fns";


export default {
  name: "campaign",
  type: "document",
  title: "Campaign",
  fields: [
    {
      name: "content",
      type: "content",
     
    }
  ],
    preview: {
    select: {
     title: 'content.title',
      media: 'content.componentLayout.0.brandLogo'
    }
  }
};