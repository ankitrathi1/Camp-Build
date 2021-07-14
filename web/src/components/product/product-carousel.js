import * as styles from "./campaign-product.css";
import { buildImageObj } from "../../lib/helpers";
import { Link } from "gatsby";
import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import { urlFor } from "../../lib/image-url";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CampaignProduct(props) {

  const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
  
  return (
    <div className="cw_product_container product_list_section">
    <props.headingLevel className="category_title">{props.heading}</props.headingLevel>
    <p className="category_sub_title">{props.introText[0].children[0].text}</p>
    <div className="cw_product_container cw_product_carousel">
                <Carousel responsive={responsive} infinite={false} autoPlay={false}>
                    {props.product && props.product.map((product) => (
                        <div className="item">
                            <div className="cw_product_img">
                                <figure>
                                    <picture
                                    classeName="bp-image__placeholder"
                                    style={{
                                        paddingTop: `100%`,
                                        background: `url(${product.productImage})`,
                                        backgroundSize: 'cover',
                                    }}
                                    >
                                 <img
                                        src={(product.productImage)
}   width="210" height="210"/>
                                    </picture>
                                </figure>
                            </div>
                            <div className="cw_product_title">{product.title}</div>
                            <div className="cw_btn_wrap">
                            {/* <button className="cw_btn_buynow" >Buy Now</button> */}
                            <button className="cw_btn_buynow" onClick={() => window.CTGetWidget(product.smartProductId,props.id)}>Buy Now</button>
                            </div>
                        </div>
                    ))}
                     </Carousel>
            </div>
          
  
  
  </div>
  );


}

export default CampaignProduct;
