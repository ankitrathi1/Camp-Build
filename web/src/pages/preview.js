import React from "react";
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import CampaignPreviewList from "../components/campaign-preview-list";
import Campaign from "../components/campaign";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: '8gjfptsf',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  withCredentials: true
})

class PreviewDoc extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        document: null,
        type: null
      }
    }
    componentDidMount () {
        const queryDraft = `*[_id == "${this.props.campaingId}"]  {
            ...,
          }`
          client.fetch(queryDraft).then(response => {
            console.log('client response', response[0]);
            this.setState({
                CampData: response[0]
            });
            console.log('this is data', this.state.CampData);
          }).catch(error => {
            console.log('problem found', error)
          })
    }
    renderPreview() {
        if (this.state.CampData) {
            return <Campaign {...this.state.CampData} />
        }
    }
    render () {
      return (
        <div>
          {this.renderPreview()}
        </div>
      )
    }
  }


const PreviewPage = (props) => {
  console.log('index page data', props);
  let campaingId = props.location.search;
  campaingId = campaingId.substring(1);
  console.log('campaign id:', campaingId);
  /*const queryDraft = `*[_id == "${campaingId}"]  {
    ...,
  }`
  client.fetch(queryDraft).then(response => {
    console.log('client response', response[0]);
    const CampData = response[0];
    this.setState({
        CampData: CampData
    });
  }).catch(error => {
    console.log('problem found', error)
  })*/

  return (
    <Layout>
      <PreviewDoc campaingId={campaingId} />
    </Layout>
  );
};

export default PreviewPage;
