import * as styles from "./campaign-preview-grid.module.css";
import CampaignPreview from "./campaign-preview";
import { Link } from "gatsby";
import React from "react";

function CampaignPreviewGrid(props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <CampaignPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

CampaignPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default CampaignPreviewGrid;
