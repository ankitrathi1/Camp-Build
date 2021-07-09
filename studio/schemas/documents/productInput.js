// 1. Import the SocialInput react component
import { MdPhonelinkSetup } from 'react-icons/md'
import MyCustomObject from '../../components/myCustomObject';

// 3. Validate function which is invoked on user input
const verifyInput = socialLink => {
  const {channelName, channelUrl} = socialLink
  if (!channelName) {
    return 'Please select a social media channel'
  }
  if (!channelUrl) {
    return 'Enter channel URL'
  }
  //return mediaName < mediaLink ? true : `Let's open the store before we close it on ${social}, shall we?`
  return true
}

export default {
  name: 'productInput',
  title: 'Add Product',
  type: 'object',
  inputComponent: MyCustomObject,
  validation: Rule => Rule.custom(fields => {
    if (fields.smartProductId==null) return "Incorrect Product"
    return true
  }),


  fields: [
    {
      // 5. Enable editors to input a string from a predefined list (social)
      name: 'productCode',
      title: 'PRODUCT GTIN/EAN/UPC 1',
      type: 'string',
      description: "Please enter the Product GTIN/EAN/UPC to check availability",
    },
    {
      name: 'smartProductId',
      type: 'string',
      title: 'SMART PRODUCT ID',
      readOnly:true,
      description: "You can't type here!",
    },
    {
      name: "title",
      type: "string",
      title: "PRODUCT NAME",
      readOnly:true,
      description: "You can't type here!",
   
    },
  ],

  // 8. Define how the socialLink object will render in the Studio 
  preview: {
    select: {
    
      productCode:'productCode'
    },
    prepare({productCode}) {
      return {
        title: `Product code : ${productCode}`
      }
    }
  }
}