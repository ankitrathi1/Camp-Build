// ./resolveProductionUrl.js
export default function resolveProductionUrl(document) {
    return `https://camp-build.netlify.app/campaign/${document.slug.current}`
  }
  