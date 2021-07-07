import {FaImage} from 'react-icons/fa'

export default {
  name: 'figure',
  title: 'Image',
  icon: FaImage,
  type: 'image',
  description: 'Upload image from your computer, TAB, or paste image fom clipboard',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      title: 'Alt Text *',
      description: 'For accessibility purposes, please describe the image',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        isHighlighted: true
      }
    }
  ]
}
