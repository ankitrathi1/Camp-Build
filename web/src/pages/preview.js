import React from "react";
import { graphql } from "gatsby";
import Campaign from "../components/campaign";
import NoPreview from "../components/no-preview";
import SEO from "../components/seo";
import Helmet from 'react-helmet';
import Layout from "../containers/layout";
const clientConfig = require("../../client-config");

const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: clientConfig.sanity.projectId,
  dataset: clientConfig.sanity.dataset,
  useCdn: false, // `false` if you want to ensure fresh data
  withCredentials: true
})

class PreviewDoc extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        CampData: null,
        cssFile: null
      }
    }
    componentDidMount () {
        const queryDraft = `*[_id == "${this.props.campaingId}"]  {
            ...,
          }`
          client.fetch(queryDraft).then(response => {
            let cssFile = '';
            if(response[0].content.style && response[0].content.style.styleFile){
                cssFile = response[0].content.style.styleFile.asset._ref;
                cssFile = cssFile.replace('file-', '');
                cssFile = cssFile.replace('-css', '');
                cssFile = 'https://cdn.sanity.io/files/'+clientConfig.sanity.projectId+'/'+clientConfig.sanity.dataset+'/'+cssFile+'.css';
            }
            this.setState({
                CampData: response[0],
                cssFile: cssFile
            });
          }).catch(error => {
            console.log('problem found', error)
          })
    }
    renderPreview() {
        if (this.state.CampData) {
            return (
            <Layout>
                <Helmet>
                {this.state.cssFile && (
                    <link rel="stylesheet" href={this.state.cssFile} />
                )}
                </Helmet>
            <Campaign {...this.state.CampData} />
            </Layout>
            );
        }else{
            return(
                <NoPreview url={clientConfig.sanity.studioUrl} />
            );
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
  let campaingId = props.location.search;
  campaingId = campaingId.substring(1);
  return (
    <Layout>
      <PreviewDoc campaingId={campaingId} />
    </Layout>
  );
};

export default PreviewPage;
