import { format, isFuture } from "date-fns";
import urlBuilder from "@sanity/image-url";

const clientConfig = require("../../client-config");

export function cn(...args) {
  return args.filter(Boolean).join(" ");
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current;
}

export function filterOutDocsPublishedInTheFuture({ publishedAt }) {
  return !isFuture(publishedAt);
}

export function getCampaignUrl(publishedAt, slug) {
  //return `/campaign/${format(new Date(publishedAt), "yyyy/MM")}/${
  return `/campaign/${
    slug.current || slug
  }/`;
}

export function urlFor(source = { asset: {} }) {
  const url = urlBuilder({projectId : clientConfig.sanity.projectId, dataset: clientConfig.sanity.dataset, }).image(source);
  return url;
}

export function buildImageObj(source = { asset: {} }) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

export function toPlainText(blocks) {
  if (!blocks) {
    return "";
  }
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }
      return block.children.map((child) => child.text).join("");
    })
    .join("\n\n");
}
