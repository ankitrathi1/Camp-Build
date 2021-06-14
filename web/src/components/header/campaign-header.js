import * as styles from "../campaign.module.css";
import { Link } from "gatsby";
import React from "react";
import { format } from "date-fns";
import { urlFor } from "../../lib/image-url";


function campaignHeader(props) {
  return (
    <header className={styles.cw_header}>
        <Link to={props.logoUrl}>
        <figure>
            <link
              rel="preload"
              as="image"
              href={`${urlFor(props.brandLogo)
                .width(700)
                .height(392)
                .quality(80)
                .fit('max')
                .auto('format')
                .url()
                .toString()}`}
            />
            <picture
              className="bp-image__placeholder"
              style={{
                paddingTop: `56.25%`,
                background: `url(${props.brandLogo.asset.metadata.lqip})`,
                backgroundSize: 'cover',
              }}
            >
              <source
                media="screen and (min-width: 560px)"
                srcSet={`${urlFor(props.brandLogo)
                  .width(700)
                  .height(392)
                  .quality(80)
                  .fit('max')
                  .auto('format')
                  .url()
                  .toString()}`}
              />
              <source
                media="screen and (min-width: 320px)"
                srcSet={`${urlFor(props.brandLogo)
                  .width(559)
                  .height(314)
                  .quality(80)
                  .fit('max')
                  .auto('format')
                  .url()
                  .toString()}`}
              />
              <img
                src={urlFor(props.brandLogo)
                  .width(700)
                  .height(392)
                  .fit('max')
                  .url()}
                alt={props.brandLogo.alt}
              />
            </picture>
          </figure>
        </Link>
    </header>
  );
}

export default campaignHeader;
