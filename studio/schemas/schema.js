// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import siteSettings from "./documents/siteSettings";
import author from "./documents/author";
import campaign from "./documents/campaign";
import product from "./documents/product";
import productCarousel from "./documents/productCarousel";
import productList from "./documents/productList";
import banner from "./documents/banner";
import imageBanner from "./documents/imageBanner";
import imageCarousel from "./documents/imageCarousel";
import country from "./documents/country";
import brand from "./documents/brand";
import campaignTab from "./documents/campaignTab";
import basicComponent from "./documents/basicComponent";
import socialChannel from "./documents/socialChannel";
import customLink from "./documents/customLink";
// Object types
import header from "./objects/header";
import footer from "./objects/footer";
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import figure from "./objects/figure";
import authorReference from "./objects/authorReference";
import socialLink from "./objects/socialLink";
import productInput from "./objects/productInput";
import textEditor from "./objects/textEditor";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "blog",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    campaign,
    header,
    footer,
    product,
    banner,
    basicComponent,
    imageBanner,
    imageCarousel,
    productCarousel,
    productList,
    socialChannel,
    author,
    mainImage,
    figure,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    country,
    brand,
    socialLink,
    productInput,
    campaignTab,
    textEditor,
    customLink
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
