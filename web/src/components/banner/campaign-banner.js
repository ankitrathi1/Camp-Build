import * as styles from "../campaign.module.css";
import { buildImageObj } from "../../lib/helpers";
import { Link } from "gatsby";
import React from "react";
import { format } from "date-fns";
import { urlFor } from "../../lib/image-url";


function campaignHeader(props) {
  return (
    <div className={styles.js_slider}>
        <div className={styles.slider_content}>
            {props.bannerImages && props.bannerImages.map((banner) => (
                <div className={styles.js_slider_item}>
                    <figure>
                        <link
                        rel="preload"
                        as="image"
                        href={`${urlFor(banner.bannerImage)
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
                            background: `url(${banner.bannerImage.asset.metadata.lqip})`,
                            backgroundSize: 'cover',
                        }}
                        >
                        <source
                            media="screen and (min-width: 560px)"
                            srcSet={`${urlFor(banner.bannerImage)
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
                            srcSet={`${urlFor(banner.bannerImage)
                            .width(559)
                            .height(314)
                            .quality(80)
                            .fit('max')
                            .auto('format')
                            .url()
                            .toString()}`}
                        />
                        <img
                            src={urlFor(banner.bannerImage)
                            .width(700)
                            .height(392)
                            .fit('max')
                            .url()}
                            alt={banner.bannerImage.alt}
                        />
                        </picture>
                    </figure>
                </div>
            ))}
        </div>
    </div>
  );
}

export default campaignHeader;
