import S from "@sanity/desk-tool/structure-builder"
import EyeIcon from 'part:@sanity/base/eye-icon'
import EditIcon from 'part:@sanity/base/edit-icon'
//import { MdPages, MdAddShoppingCart, MdImage, MdViewCompact, MdAccessibility} from "react-icons/md"
//import { FaSitemap, FaTag, FaTags, FaBuffer, FaSlidersH, FaBoxes, FaGlobe } from 'react-icons/fa'
import IframePreview from "../previews/IframePreview"
//import SeoPreview from '../previews/seo/SeoPreviews'

// a11y preview
//import ColorblindPreview from '../previews/a11y/colorblind-filter/ColorblindPreview'
//import TextToSpeechPreview from '../previews/a11y/text-to-speech/TextToSpeechPreview'
//import BraillePreview from '../previews/a11y/braille/Braille'

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
      /*S.view
        .component(SeoPreview)
        .options({previewURL})
        .icon(EyeIcon)
        .title('SEO Preview'),
        S.view
          .component(ColorblindPreview)
          .options({previewURL})
          .icon(EyeIcon)
          .title('Colorblind'),
        S.view
          .component(TextToSpeechPreview)
          .options({fields: ['title', 'excerpt', 'body']})
          .icon(MdAccessibility)
          .title('Text to speech'),*/
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
S.documentTypeList("campaign").title("CAMPAIGNS");

