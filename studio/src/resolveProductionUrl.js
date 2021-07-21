export default function resolveProductionUrl(document) {
    console.log('preview document', document);
    
    return `http://localhost:8000/campaign/${document.content.slug.current}`
}