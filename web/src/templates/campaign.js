import { graphql } from "gatsby";
import Campaign from "../components/campaign";
import OneTrust from "../components/onetrust";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { toPlainText } from "../lib/helpers";
import favicon from '/src/images/favicon.ico';
import Helmet from 'react-helmet';
import '../styles/cw_gride_widget_main.css';
export const query = graphql`
  query CampaignTemplateQuery($id: String!) {
    campaign: sanityCampaign(id: { eq: $id }) {
      id
      _id
      content{
        locale
        rootUrl
        title
        gaID
        reportSuiteID
        brand {
          brandName
          brandId
        }
        country {
          countryId
          countryName
         
        }
        bodyComponent {
          ... on SanitySocialChannel {
            socialChannel {
              channelName
              channelUrl
            }
            _type
          }
          ... on SanityImageCarousel {
            imageCarousel: bannerImages {
              alt
              asset {
                url
                metadata {
                  lqip
                }
              }
            }
            _type
            title
            autoSlide
          }
          ... on SanityImageBanner {
            bannerImages {
              alt
              asset {
                url
                metadata {
                  lqip
                }
              }
            }
            title
            _type
          }
          ... on SanityProductCarousel {
            headingLevel
            heading
            product {
              productImage
              smartProductId
              title
              productCode
            }
            _type
            introText {
              children {
                text
              }
            }
          }
          ... on SanityProductList {
            _type
            headingLevel
            heading
            product {
              productCode
              smartProductId
              productImage
              title
            }
            introText {
              children {
                text
              }
            }
          }
        }
        style {
          styleFile {
            asset {
              id
              url
            }
          }
          header {
            logoUrl
            clickLogo
            brandLogo {
              alt
              asset {
                url
                metadata {
                  lqip
                }
              }
            }
          }
          footer {
            tncURL
            tnc
            privacyNoticeUrl
            privacyNotice
            cookieNoticeUrl
            cookieNotice
            customLink {
              customLink
              customLinkUrl
            }
          }
        }
      }
    }
  }
`;
const CampaignTemplate = (props) => {
  console.log('camp page data', props);
  const { data, errors } = props;
  const campaign = data && data.campaign;
  const dt = new Date;
  
  const childCSS= 'https://s3-ap-southeast-1.amazonaws.com/www.cartwire.co/widget' + '/v2.0/css/' + 'cw_gride_widget_magnum_uk.css' +'?ver='+dt.getTime();
  
  {errors && <SEO title="GraphQL Error" />}
  return (
    <Layout>
      <Helmet>
      <link rel="icon" href={favicon} />
      {/* OneTrust Cookies Consent Notice start for unilever-campaign.netlify.app */}
      <script async type="text/javascript" src="https://cdn.cookielaw.org/consent/85f62e3a-1550-41d3-b34a-06f23c84631d-test/OtAutoBlock.js"></script>
      <script async src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" data-document-language="true" type="text/javascript" charset="UTF-8" data-domain-script="85f62e3a-1550-41d3-b34a-06f23c84631d-test"></script>
      {/* OneTrust Cookies Consent Notice end for unilever-campaign.netlify.app */}

      <script src="/googleAnalytics.js"></script>
      <link rel="stylesheet" href={childCSS} />
      {campaign.content.style.styleFile && (
        <link rel="stylesheet" href={campaign.content.style.styleFile.asset.url} />
      )}
    </Helmet>
      {errors && <SEO title="GraphQL Error" />}
      {campaign && (
        <SEO
          title={campaign.content.title || "Untitled"}
          description={toPlainText(campaign._rawExcerpt)}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      
      {campaign && <Campaign {...campaign} />}
    </Layout>
  );
};

export default CampaignTemplate;