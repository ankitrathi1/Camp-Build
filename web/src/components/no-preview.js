import * as styles from "./campaign.module.css";
import React from "react";

function NoPreview(props) {
  return (
      <div className="cw_no_preview">
         <p>To preview any campaign please login to Studio first, <a href={props.url} target="_blank">Click Here</a></p>
         
      </div>
  );
}

export default NoPreview;