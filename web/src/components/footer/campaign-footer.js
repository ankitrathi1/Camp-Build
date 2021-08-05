import * as styles from "./campaign-footer.css";
import { buildImageObj } from "../../lib/helpers";
import { Link } from "gatsby";
import React from "react";
import { format } from "date-fns";
import { urlFor } from "../../lib/image-url";
import { ReactComponent as UnileverLogo } from '../../images/svg/unilever_logo.svg';

/*
<ul class="cw_footer_socialIcon">
            <li><a class="socialIcon facebook" href="http://www.facebook.com/magnumuk" target="_blank" title="facebook-icon - Link open in new window">facebook-icon - Link open in new window</a></li>
            <li><a class="socialIcon twitter" href="http://www.twitter.com/magnumuk" target="_blank" title="twitter-icon - Link open in new window">twitter-icon - Link open in new window</a></li>
            <li><a class="socialIcon instagram" href="http://www.instagram.com/magnum" target="_blank" title="instagram-icon - Link open in new window">instagram-icon - Link open in new window</a></li>
            <li><a class="socialIcon youtube" href="http://www.youtube.com/mymagnum" target="_blank" title="youtube-icon - Link open in new window">youtube-icon - Link open in new window</a></li>
        </ul>
*/

function campaignFooter(props) {
  return (
    <div className="cw_footer cw_text_center campaign-component">
        
        <ul className="cw_footer_links">
            <li><button className="ot-sdk-show-settings">Manage Preferences</button></li>
            <li>
                <a href={props.style.footer.cookieNoticeUrl} target="_blank" title={props.style.footer.cookieNotice}>{props.style.footer.cookieNotice}<i className="copy_icon"></i></a>
            </li>
            <li>
                <a href={props.style.footer.privacyNoticeUrl} target="_blank" title={props.style.footer.privacyNotice}>{props.style.footer.privacyNotice}<i className="copy_icon"></i></a>
            </li>
            {props.style.footer.customLink && props.style.footer.customLink.map((link) => (
            <li>
                <a href={link.customLinkUrl} target="_blank" title={link.customLink}>{link.customLink}<i className="copy_icon"></i></a>
            </li>
            ))}
        </ul>
        <div className="copyright">
        <a href="https://www.unilever.com/" target="_blank" title="Link opens in a new window">
            <UnileverLogo />
            <span>© {new Date().getFullYear()} Unilever</span>
        </a>
        </div>
    </div>
  );
}

export default campaignFooter;
