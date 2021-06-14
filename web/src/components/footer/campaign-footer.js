import * as styles from "./campaign-footer.css";
import { buildImageObj } from "../../lib/helpers";
import { Link } from "gatsby";
import React from "react";
import { format } from "date-fns";
import { urlFor } from "../../lib/image-url";


function campaignHeader(props) {
  return (
    <div className="cw_footer cw_text_center">
        <ul className="cw_footer_links">
            <li>
                <a href={props.cookieNoticeUrl} target="_blank" title={props.cookieNotice}>{props.cookieNotice}<i className="copy_icon"></i></a>
            </li>
            <li>
                <a href={props.cookieNoticeUrl} target="_blank" title={props.cookieNotice}>{props.cookieNotice}<i className="copy_icon"></i></a>
            </li>
            <li><button className="ot-sdk-show-settings">Manage Preferences</button></li>
        </ul>
        <div className="copyright">
        <a href="https://www.unilever.com/" target="_blank" title="Link opens in a new window">
            <img src="images/footer-logo.png" alt="Unilever" /><span>© 
            <script>document.write(new Date().getFullYear());</script> Unilever</span>
        </a>
        </div>
    </div>
  );
}

export default campaignHeader;
