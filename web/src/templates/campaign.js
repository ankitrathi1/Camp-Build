import { graphql } from "gatsby";
import Campaign from "../components/campaign";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { toPlainText } from "../lib/helpers";
export const query = graphql`
  query CampaignTemplateQuery($id: String!) {
    campaign: sanityCampaign(id: { eq: $id }) {
      brand
      componentLayout {
        ... on SanityBannerSlider {
          title
          id
          _type
          autoSlide
          bannerImages {
            bannerImage {
              asset {
                url
                metadata {
                  lqip
                }
              }
              alt
            }
          }
        }
        ... on SanityFooter {
          id
          title
          _type
          cookieNotice
          cookieNoticeUrl
          customLink
          customLinkUrl
          privacyNotice
          privacyNoticeUrl
          tnc
          tncURL
        }
        ... on SanityHeader {
          id
          title
          _type
          logoUrl
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
        ... on SanityProductSlider {
          id
          title
          _type
          displayFormat
          heading
          headingLevel
          introText
          product {
            name
            productImage {
              alt
              asset {
                url
                metadata {
                  lqip
                }
              }
            }
          }
        }
      }
      country
      gaID
      id
      locale
      publishedAt
      rootUrl
      title
    }
  }
`;
const CampaignTemplate = (props) => {
  const { data, errors } = props;
  const campaign = data && data.campaign;
  return (
    <Layout>
          {/* <Helmet>
            <script src="/analytics.js"></script>
    </Helmet> */}
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
