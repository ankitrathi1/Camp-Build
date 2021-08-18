import * as styles from "./campaign-product.css";
import { urlFor } from "../../lib/helpers";
import { Link } from "gatsby";
import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PortableText from '@sanity/block-content-to-react'

/*{JSON.stringify(props, null, 2)}*/
const serializer = {
    types: {
        figure: props => (
        <figure>
            <picture
                classeName="bp-image__placeholder"
                style={{
                    paddingTop: `100%`,
                    background: `url(${urlFor(props.node)})`,
                    backgroundSize: 'cover',
                }}
            />
            <img src={urlFor(props.node)} alt={props.node.alt} width="210" height="210"/>
        </figure>)
    },
    marks: {
        superscript: props => (<sup>{props.children}</sup>),
        subscript: props => (<sub>{props.children}</sub>)
    }
}

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
    <div className="cw_product_container product_list_section campaign-component productCarousel-section" data-componentname="productCarousel" data-component-experience-variant="default" data-component-variants="defaultView" data-service-provider="cartwire">
    <props.headingLevel className="category_title" >{props.heading}</props.headingLevel>
    <PortableText
        blocks={props.introText}
        serializers={serializer}
    />
    <div className="cw_product_container cw_product_carousel">
                <Carousel responsive={responsive} infinite={false} autoPlay={false}>
                    {props.product && props.product.map((product,i) => (
                        <div className="item" >
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
                            <button className="cw_btn_buynow" data-index={i} onClick={() => window.CTGetWidget(product.smartProductId,props.id,'productCarousel-section')}>Buy Now</button>
                            </div>
                        </div>
                    ))}
                     </Carousel>
            </div>
          
  
  
  </div>
  );


}

export default CampaignProduct;
