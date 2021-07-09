import * as styles from "./campaign-social.css";
import { Link } from "gatsby";
import React from "react";
import { format } from "date-fns";


function campaignSocial(props) {
  return (
    <div className="cw_footer cw_text_center">
        <ul class="cw_footer_socialIcon">
            {props.socialChannel && props.socialChannel.map((social) => (
                 <li>
                     <a className={social.channelName} href={social.channelUrl} target="_blank" title="{social.channelName} - Link open in new window">{social.channelName} - Link open in new window</a>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default campaignSocial;
