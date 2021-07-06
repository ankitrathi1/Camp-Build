import CampaignPreviewGrid from "../components/campaign-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";

import { responsiveTitle1 } from "../components/typography.module.css";

export const query = graphql`
  query ArchivePageQuery {
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
            slug {
              current
            }
          }
        }
      }
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const campaignNodes = data && data.campaign && mapEdgesToNodes(data.campaign);
console.log(campaignNodes);
  return (
    <Layout>
      <SEO title="Archive" />
      <Container>
        <h1 className={responsiveTitle1}>Archive</h1>
        {campaignNodes && campaignNodes.length > 0 && (
          <CampaignPreviewGrid nodes={campaignNodes} />
        )}
      </Container>
    </Layout>
  );
};

export default ArchivePage;
