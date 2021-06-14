import * as styles from "./campaign-preview.module.css";
import { buildImageObj, cn, getCampaignUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";

import { responsiveTitle3 } from "./typography.module.css";

function CampaignPreview(props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getCampaignUrl(props.publishedAt, props.slug.current)}
    >
      
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        
      </div>
    </Link>
  );
}

export default CampaignPreview;
