import React from "react";
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import CampaignPreviewList from "../components/campaign-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query IndexPageQuery {
    campaigns: allSanityCampaign(
      sort: { fields: [_createdAt], order: DESC }
      filter: { _createdAt: { ne: null } }
    ) {
      edges {
        node {
          id
          _createdAt
          content {
            title
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  //const site = (data || {}).site;
  const campaignNodes = (data || {}).campaigns
    ? mapEdgesToNodes(data.campaigns)
        //.filter(filterOutDocsWithoutSlugs)
        //.filter(filterOutDocsPublishedInTheFuture)
    : [];
    //console.log(campaignNodes);
  /*if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }*/

  return (
    <Layout>
      <Container>
        <h1 hidden>Welcome</h1>
        {campaignNodes && (
          <CampaignPreviewList
            title="Latest Campaign"
            nodes={campaignNodes}
            browseMoreHref="/archive/"
          />
        )}
      </Container>
    </Layout>
  );
};

export default IndexPage;
