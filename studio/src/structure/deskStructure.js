import S from "@sanity/desk-tool/structure-builder";
import { MdPages, MdAddShoppingCart, MdImage, MdViewCompact} from "react-icons/md";
import { FaSitemap, FaTag, FaTags, FaBuffer, FaSlidersH, FaBoxes, FaGlobe } from 'react-icons/fa'
import IframePreview from "../previews/IframePreview";

// Web preview configuration
const remoteURL = "https://camp-build.netlify.app";
const localURL = "http://localhost:8000";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType == "campaign") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title("Web preview")
        .options({ previewURL }),
    ]);
  }
  return S.document().views([S.view.form()]);
};

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
//S.documentTypeList("campaign").title("Campaign");
  S.list()
    .title("Content")
    .items([
      S.divider(),
      S.listItem()
        .title("Campaign")
        .icon(MdViewCompact)
        .schemaType("campaign")
        .child(S.documentTypeList("campaign").title("Campaign")),
      //S.divider(),
      /*S.listItem()
        .title('Manage Components')
        .icon(FaBuffer)
        .child(
          S.list()
            .title('Component Type')
            .items([
              S.listItem()
                .title('Header')
                .icon(MdPages)
                .schemaType('header')
                .child(S.documentTypeList('header').title('Header')),
              S.divider(),
              S.listItem()
                .title('Footer')
                .icon(MdPages)
                .schemaType('footer')
                .child(S.documentTypeList('footer').title('Footer')),
              S.divider(),
              S.listItem()
                .title('Banner Carousel/List')
                .icon(FaBoxes)
                .schemaType('bannerSlider')
                .child(S.documentTypeList('bannerSlider').title('Banner Slider/List')),
              S.divider(),
              S.listItem()
                .title('Product Carousel/List')
                .icon(FaBoxes)
                .schemaType('productSlider')
                .child(S.documentTypeList('productSlider').title('Product Slider')),
              S.divider(),
            ])
        ),
      S.listItem()
        .title("Products")
        .icon(MdAddShoppingCart)
        .schemaType("product")
        .child(S.documentTypeList("product").title("Products (add products used for product carousel/listing)")),
      S.listItem()
        .title("Banner Images")
        .icon(MdImage)
        .schemaType("banner")
        .child(S.documentTypeList("banner").title("Banner Images (Add hero images used for banner carousel/listing)")),
      S.listItem()
        .title("Social Media Links")
        .icon(MdImage)
        .schemaType("socialMedia")
        .child(S.documentTypeList("socialMedia").title("Add Social Media to show in footer")),*/
      S.divider(),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      /*...S.documentTypeListItems().filter(
        (listItem) =>
          !["category", "author", "post", "siteSettings", "campaign", "product", "component", "banner", "bannerSlider", "productSlider", "header", "footer","country","brand"].includes(
            listItem.getId()
          )
      ),*/
    ]);
