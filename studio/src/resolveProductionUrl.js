export default function resolveProductionUrl(document) {
    console.log('preview document123', document);
    
    return `https://camp-build.netlify.app/preview?${document._id}`
}