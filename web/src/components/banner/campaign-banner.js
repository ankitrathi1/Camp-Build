import * as styles from "../campaign.module.css";
 import * as style from "./campaign-banner.css";
import { buildImageObj } from "../../lib/helpers";
import { Link } from "gatsby";
import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import { urlFor } from "../../lib/image-url";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
var newBannerCount=0;
function CampaignBanner(props) {
    
const [count, setCount] = useState(newBannerCount);
  useEffect(() => {
   
    setCount(newBannerCount++);
    
},[props.id]);
   
  return (
      <div>
    <div className="js_slider" id={'bannerSlider'+count}>
        <div className="slider_content">
        <Carousel interval={3000} autoPlay={props.autoSlide} infiniteLoop={true} stopOnHover={false}>
       
            {props.bannerImages && props.bannerImages.map((banner) => (
               
                     
                <div className="js_slider_item">
                    <figure>
                        <link
                        rel="preload"
                        as="image"
                        href={`${urlFor(banner.bannerImage)
                            .width(1300)
                            .height(450)
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
                            .width(1400)
                            .height(450)
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
