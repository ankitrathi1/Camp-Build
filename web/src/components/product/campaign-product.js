import * as styles from "./campaign-product.css";
import { buildImageObj } from "../../lib/helpers";
import { Link } from "gatsby";
import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import { urlFor } from "../../lib/image-url";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function CampaignHeader(props) {
  const [page, setPage] = useState(1);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
 const totalProduct=props.product.length;
 const [productCount, setProductCount] = useState(0);
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
  useEffect(() => {
    const getProductList = () => {
      setLoading(true);
        
      var newProductList=[];
      var currentCount=productList.length;
      for (var i =currentCount; i < currentCount+4; i++) 
      {
        if((productList.length + newProductList.length) !=props.product.length)
        {
          setProductCount(productCount +1);
        
          newProductList.push(props.product[i]);
         
        }
       
    }
    setProductList([...productList, ...newProductList]);
          setLoading(false);
      
    }
    getProductList();
  }, [page]);
 
 
  return (
    <div className="cw_container cw_container_slider cw_product_list my-2">
    <props.headingLevel className="category_title my-3">{props.heading}</props.headingLevel>
    <p className="category_title my-3">{props.introText}</p>
    <div  className={`${props.displayFormat=='list' ? 'shown' : 'hidden'}`}>
     
       <ul class="cw_product_list">
        {productList.map((x, i) =>  (
                <li key={i}>
                    <div className="cw_roduct_img">
                        <figure>
                            <link
                            rel="preload"
                            as="image"
                            href={`${urlFor(x.productImage)
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
                                background: `url(${x.productImage.asset.metadata.lqip})`,
                                backgroundSize: 'cover',
                            }}
                            >
                            <source
                                media="screen and (min-width: 560px)"
                                srcSet={`${urlFor(x.productImage)
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
                                srcSet={`${urlFor(x.productImage)
                                .width(559)
                                .height(314)
                                .quality(80)
                                .fit('max')
                                .auto('format')
                                .url()
                                .toString()}`}
                            />
                            <img
                                src={urlFor(x.productImage)
                                .width(700)
                                .height(392)
                                .fit('max')
                                .url()}
                                alt={x.productImage.alt}
                            />
                            </picture>
                        </figure>
                    </div>
                    <div className="cw_product_title">{x.name}</div>
                    <div className="cw_btn_wrap">
                    <button className="cw_btn_buynow" >Buy Now</button>
                    </div>
                </li>
            ))}
            
       </ul>
       <div class="cw_height_10"></div>
    <div class="cw_load_cta">
    {totalProduct !== productList.length && <button className="cw_btn_load" onClick={() => setPage(page + 1)}>Load More</button>}
     
    </div>
       
    </div>
    <div  className={`product_slider ${props.displayFormat=='carousel' ? 'shown' : 'hidden'}`}>
      <div id="exampleSlider2" className="exampleSlider slideBlock">
      
        <div  className="MS-content">
        <Carousel 
                      responsive={responsive} 
                     infinite={true} autoPlay={false}
                    
                    >
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
                    <button className="cw_btn_buynow" >Buy Now</button>
                    </div>
                </div>
            ))}
             </Carousel>
        </div>
       
      </div>
    </div>
  </div>
  );
}

export default CampaignHeader;
