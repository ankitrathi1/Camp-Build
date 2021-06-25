// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import siteSettings from "./documents/siteSettings";
import author from "./documents/author";
import campaign from "./documents/campaign";
import product from "./documents/product";
import productSlider from "./documents/productSlider";
import banner from "./documents/banner";
import bannerSlider from "./documents/bannerSlider";
import header from "./documents/header";
import footer from "./documents/footer";
import country from "./documents/country";
import brand from "./documents/brand";
import campaignTab from "./documents/campaignTab";
import social from "./documents/socialMedia";
// Object types
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import figure from "./objects/figure";
import authorReference from "./objects/authorReference";
import socialLink from "./objects/socialLink";

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
    productSlider,
    bannerSlider,
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
    social,
    campaignTab
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
