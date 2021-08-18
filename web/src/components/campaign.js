import * as styles from "./campaign.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import HeaderComponent from "./header/campaign-header";
import FooterComponent from "./footer/campaign-footer";
import ProductComponent from "./product/campaign-product";
import ImageBanner from "./banner/image-banner";
import ImageCarousel from "./banner/image-carousel";
import ProductList from "./product/product-list";
import ProductCarousel from "./product/product-carousel";
import Social from "./social/social";
//import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

function Campaign(props) {
  const {
    title,
    content,
    _id
  } = props;
  
  return (
      <div className="cw_main_container">
         {/* <div>
        <input className={styles.analytics} id="analytics-id" type="text" value={gaID}/>
        <input className={styles.analytics} id="rootUrl-id" type="text" value={rootUrl}/>
        </div> */}
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
              {comp._type === 'productList' && (
              <ProductList {...comp}  id={_id}/>
            )}
              {comp._type === 'productCarousel'  && (
              <ProductCarousel {...comp} id={_id}/>
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