import * as styles from "./campaign.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import HeaderComponent from "./header/campaign-header";
import FooterComponent from "./footer/campaign-footer";
import ProductComponent from "./product/campaign-product";
import BannerComponent from "./banner/campaign-banner";
//import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

function Campaign(props) {
  const {
    country,
    gaID,
    id,
    locale,
    publishedAt,
    rootUrl,
    title,
    brand,
    componentLayout
  } = props;
  console.log(props);
  
  return (
      <div className="cw_main_container">
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
      </div>
  );
}

export default Campaign;
