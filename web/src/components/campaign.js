import * as styles from "./campaign.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import HeaderComponent from "./header/campaign-header";
import FooterComponent from "./footer/campaign-footer";
import ProductComponent from "./product/campaign-product";
import ImageBanner from "./banner/image-banner";
import ImageCarousel from "./banner/image-carousel";
import Social from "./social/social";
//import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

function Campaign(props) {
  const {
    title,
    content
  } = props;
  console.log(props);
  
  return (
      <div className="cw_main_container">
        <section>
          <HeaderComponent {...content} />
        </section>
        {content.bodyComponent && content.bodyComponent.map((comp) => (
          <section>
            {comp._type === 'imageBanner' && (
              <ImageBanner {...comp} />
            )}
            {comp._type === 'imageCarousel' && (
              <ImageCarousel {...comp} />
            )}
            {comp._type === 'socialChannel' && (
              <Social {...comp} />
            )}
          </section>
        ))}
        <section>
          <FooterComponent {...content} />
        </section>
      </div>
  );
}

export default Campaign;


/*
{componentLayout && componentLayout.map((comp) => (
          <section>
            {comp._type === 'header' && (
              <HeaderComponent {...comp} />
            )}
            {comp._type === 'footer' && (
              <FooterComponent {...comp} />
            )}
            {comp._type === 'productSlider' && (
              <ProductComponent {...comp} />
            )}
            {comp._type === 'bannerSlider' && (
              <BannerComponent {...comp} />
            )}
          </section>
        ))}
*/