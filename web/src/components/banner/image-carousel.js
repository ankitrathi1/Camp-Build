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
    <div className="cw_js_slider banner_list_section campaign-component" data-componentname="imageCarousel" data-component-experience-variant="default" data-component-variants="defaultView">
           <h1 className="category_title hidden data-componentname">{props.title}</h1>
        <div className="slider_content">
     
        <Carousel interval={3000} autoPlay={props.autoSlide} infiniteLoop={true} stopOnHover={false}>
       
            {props.imageCarousel && props.imageCarousel.map((banner) => (
               
                     
                <div className="cw_js_slider_item">
                    <figure>
                        <picture
                        className="bp-image__placeholder"
                        style={{
                            paddingTop: `56.25%`,
                            background: `url(${banner.asset.metadata.lqip})`,
                            backgroundSize: 'cover',
                        }}
                        >
                        <source
                            media="screen and (max-width: 560px)"
                            srcSet={`${urlFor(banner)
                            .width(375)
                            .height(200)
                            .fit('max')
                            .auto('format')
                            .url()
                            .toString()}`}
                        />
                        <source
                            media="screen and (max-width: 320px)"
                            srcSet={`${urlFor(banner)
                            .width(559)
                            .height(314)
                            .fit('max')
                            .auto('format')
                            .url()
                            .toString()}`}
                        />
                        <img
                            src={urlFor(banner)
                            .width(1400)
                            .height(550)
                            .fit('max')
                            .url()}
                            alt={banner.alt}
                        />
                        </picture>
                    </figure>
                  
                </div>
               
               
            )
            
            )}
             </Carousel>
        </div>
       
    </div>
  );

 
}

export default CampaignBanner;
