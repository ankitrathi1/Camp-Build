// 1. Import the SocialInput react component
import { MdPhonelinkSetup } from 'react-icons/md'


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

  // 4. Perform validation
  //validation: Rule => Rule.custom(verifyInput),

  fields: [
    {
      // 5. Enable editors to input a string from a predefined list (social)
      name: 'productCode',
      title: 'PRODUCT GTIN/EAN/UPC',
      type: 'string',
    }
  ],

  // 8. Define how the socialLink object will render in the Studio 
  preview: {
    select: {
      product: 'productCode'
    },
    prepare({product}) {
      return {
        title: product,
      }
    }
  }
}