import * as styles from "./campaign-product.css";
import { buildImageObj } from "../../lib/helpers";
import { Link } from "gatsby";
import React from "react";
import { format } from "date-fns";
import { urlFor } from "../../lib/image-url";


function campaignHeader(props) {
  return (
    <div className="cw_container cw_container_slider cw_product_list my-2">
    <h1 className="category_title my-3">NEW Magnum Double Gold Caramel Billionaire Has Arrived</h1>
    <div className="product_slider">
      <div id="exampleSlider2" className="exampleSlider slideBlock">
        <div className="MS-content">
            {props.product && props.product.map((product) => (
                <div className="item">
                    <div className="cw_roduct_img">
                        <figure>
                            <link
                            rel="preload"
                            as="image"
                            href={`${urlFor(product.productImage)
                                .width(700)
                                .height(392)
                                .quality(80)
                                .fit('max')
                                .auto('format')
                                .url()
                                .toString()}`}
                            />
                            <picture
                            classeName="bp-image__placeholder"
                            style={{
                                paddingTop: `56.25%`,
                                background: `url(${product.productImage.asset.metadata.lqip})`,
                                backgroundSize: 'cover',
                            }}
                            >
                            <source
                                media="screen and (min-width: 560px)"
                                srcSet={`${urlFor(product.productImage)
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
                                srcSet={`${urlFor(product.productImage)
                                .width(559)
                                .height(314)
                                .quality(80)
                                .fit('max')
                                .auto('format')
                                .url()
                                .toString()}`}
                            />
                            <img
                                src={urlFor(product.productImage)
                                .width(700)
                                .height(392)
                                .fit('max')
                                .url()}
                                alt={product.productImage.alt}
                            />
                            </picture>
                        </figure>
                    </div>
                    <div className="cw_product_title">Magnum Double Gold Caramel Billionaire Tub 440ml</div>
                    <div className="cw_btn_wrap">
                    <button className="cw_btn_buynow" onclick="CTGetWidget('404d8afeadacf4814c91d285e399285b')">Buy Now</button>
                    </div>
                </div>
            ))}
        </div>
        <div className="MS-controls">
          <button className="MS-left left" aria-label="scroll left">
            <span className="visually-hidden">Previous</span>
            <i className="left arrows">
              
            </i>
          </button>
          <button className="MS-right rigth" aria-label="scroll right">
            <span className="visually-hidden">Next</span>
            <i className="right arrows">
              
            </i>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default campaignHeader;
