import * as styles from "../campaign.module.css";
 import * as style from "./campaign-banner.css";
import { buildImageObj } from "../../lib/helpers";
import { Link } from "gatsby";
import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import { urlFor } from "../../lib/image-url";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
var newBannerCount = 1;
function CampaignBanner(props) {
   
  return (
    <div className="cw_js_slider cw_image_banner campaign-component" data-componentname="imageBanner" data-component-experience-variant="default" data-component-variants="defaultView">
        <div className="slider_content">
        <div className="cw_js_slider_item">
                <figure>
                    <picture
                    className="bp-image__placeholder"
                    >
                    <source
                        media="screen and (max-width: 560px)"
                        srcSet={`${urlFor(props.bannerImages)
                        .width(375)
                        .fit('max')
                        .auto('format')
                        .url()
                        .toString()}`}
                    />
                    <source
                        media="screen and (max-width: 320px)"
                        srcSet={`${urlFor(props.bannerImages)
                        .width(559)
                        .fit('max')
                        .auto('format')
                        .url()
                        .toString()}`}
                    />
                    <img
                        src={urlFor(props.bannerImages)
                        .width(1400)
                        .fit('max')
                        .url()}
                        alt={props.bannerImages.alt}
                    />
                    </picture>
                </figure>
                
            </div>
        </div>
       
    </div>
  );

 
}

export default CampaignBanner;
