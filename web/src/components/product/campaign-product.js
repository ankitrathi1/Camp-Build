import * as styles from "./campaign-product.css";
import { buildImageObj } from "../../lib/helpers";
import { Link } from "gatsby";
import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import { urlFor } from "../../lib/image-url";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function CampaignProduct(props) {
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
    <div className="cw_product_container">
    <props.headingLevel className="category_title">{props.heading}</props.headingLevel>
    <p className="category_sub_title">{props.introText}</p>
    {props.displayFormat=='list' && (
               <div>
               <ul className="cw_product_list">
                {productList.map((x, i) =>  (
                        <li key={i} className="item">
                            <div className="cw_product_img">
                                <figure>
                                    <picture
                                    classeName="bp-image__placeholder"
                                    style={{
                                        paddingTop: `100%`,
                                        background: `url(${x.productImage.asset.metadata.lqip})`,
                                        backgroundSize: 'cover',
                                    }}
                                    >
                                    <source
                                        media="screen and (min-width: 560px)"
                                        srcSet={`${urlFor(x.productImage)
                                        .width(210)
                                        .height(210)
                                        .fit('max')
                                        .auto('format')
                                        .url()
                                        .toString()}`}
                                    />
                                    <source
                                        media="screen and (min-width: 320px)"
                                        srcSet={`${urlFor(x.productImage)
                                        .width(210)
                                        .height(210)
                                        .fit('max')
                                        .auto('format')
                                        .url()
                                        .toString()}`}
                                    />
                                    <img
                                        src={urlFor(x.productImage)
                                        .width(210)
                                        .height(210)
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
            )}
             {props.displayFormat=='carousel'  && (
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
                                        background: `url(${product.productImage.asset.metadata.lqip})`,
                                        backgroundSize: 'cover',
                                    }}
                                    >
                                    <source
                                        media="screen and (min-width: 560px)"
                                        srcSet={`${urlFor(product.productImage)
                                        .width(210)
                                        .height(210)
                                        .fit('max')
                                        .auto('format')
                                        .url()
                                        .toString()}`}
                                    />
                                    <source
                                        media="screen and (min-width: 320px)"
                                        srcSet={`${urlFor(product.productImage)
                                        .width(210)
                                        .height(210)
                                        .fit('max')
                                        .auto('format')
                                        .url()
                                        .toString()}`}
                                    />
                                    <img
                                        src={urlFor(product.productImage)
                                        .width(210)
                                        .height(210)
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
            )}
  
  
  </div>
  );
}

export default CampaignProduct;
