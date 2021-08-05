import { graphql } from "gatsby";
import Campaign from "../components/campaign";
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
      {/* <script src="/googleAnalytics.js"></script> */}
      <link rel="stylesheet" href={childCSS} />
      {campaign.content.style.styleFile && (
        <link rel="stylesheet" href={campaign.content.style.styleFile.asset.url} />
      )}
    </Helmet>
      {errors && <SEO title="GraphQL Error" />}
      {campaign && (
        <SEO
          title={campaign.title || "Untitled"}
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