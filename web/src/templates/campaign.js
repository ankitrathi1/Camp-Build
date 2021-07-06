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
export const query = graphql`
  query CampaignTemplateQuery($id: String!) {
    campaign: sanityCampaign(id: { eq: $id }) {
      id
      content{
        locale
        rootUrl
        title
        bodyComponent {
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
        }
        style {
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
  const { data, errors } = props;
  const campaign = data && data.campaign;
  return (
    <Layout>
    <Helmet>
      <link rel="icon" href={favicon} />
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
