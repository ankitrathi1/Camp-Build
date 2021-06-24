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
    
const [count, setCount] = useState(newBannerCount);
  useEffect(() => {
   
    setCount(newBannerCount++);
    
},[props.id]);
   
  return (
      <div>
    <div className="cw_js_slider" id={'cw_banner_slider'+count}>
        <div className="slider_content">
        <Carousel interval={3000} autoPlay={props.autoSlide} infiniteLoop={true} stopOnHover={false}>
       
            {props.bannerImages && props.bannerImages.map((banner) => (
               
                     
                <div className="cw_js_slider_item">
                    <figure>
                        <picture
                        className="bp-image__placeholder"
                        style={{
                            paddingTop: `56.25%`,
                            background: `url(${banner.bannerImage.asset.metadata.lqip})`,
                            backgroundSize: 'cover',
                        }}
                        >
                        <source
                            media="screen and (max-width: 560px)"
                            srcSet={`${urlFor(banner.bannerImage)
                            .width(375)
                            .height(200)
                            .fit('max')
                            .auto('format')
                            .url()
                            .toString()}`}
                        />
                        <source
                            media="screen and (max-width: 320px)"
                            srcSet={`${urlFor(banner.bannerImage)
                            .width(559)
                            .height(314)
                            .fit('max')
                            .auto('format')
                            .url()
                            .toString()}`}
                        />
                        <img
                            src={urlFor(banner.bannerImage)
                            .width(1400)
                            .height(550)
                            .fit('max')
                            .url()}
                            alt={banner.bannerImage.alt}
                        />
                        </picture>
                    </figure>
                  
                </div>
               
               
            )
            
            )}
             </Carousel>
        </div>
       
    </div>
  
    </div>
  );

 
}

export default CampaignBanner;
