import * as styles from "./campaign-header.css";
import { Link } from "gatsby";
import React from "react";
import { format } from "date-fns";
import { urlFor } from "../../lib/image-url";


function campaignHeader(props) {
  return (
    <header className="cw_header">
        <Link to={props.style.header.logoUrl}>
        <figure>
            <picture
              className="bp-image__placeholder">
              <source
                media="screen and (min-width: 560px)"
                srcSet={`${urlFor(props.style.header.brandLogo)
                  .width(180)
                  .height(60)
                  .fit('max')
                  .auto('format')
                  .url()
                  .toString()}`}
              />
              <source
                media="screen and (min-width: 320px)"
                srcSet={`${urlFor(props.style.header.brandLogo)
                  .width(180)
                  .height(60)
                  .fit('max')
                  .auto('format')
                  .url()
                  .toString()}`}
              />
              <img
                src={urlFor(props.style.header.brandLogo)
                  .width(180)
                  .height(60)
                  .fit('max')
                  .url()}
                alt={props.style.header.brandLogo.alt}
              />
            </picture>
          </figure>
        </Link>
    </header>
  );
}

export default campaignHeader;
