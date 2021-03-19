import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Container from "./container";
//import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

function BlogPost(props) {
  const {
    authors,
    product,
    title,
    Logo,
    mainImage,
    publishedAt,
  } = props;
  return (
    <article className={styles.root}>
      <div className={styles.brandLogo}>
          {Logo && Logo.asset && (
          <div>
            <img
              src={imageUrlFor(buildImageObj(Logo))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit("crop")
                .auto("format")
                .url()}
              alt={Logo.alt}
            />
          </div>
        )}
        </div>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
          </div>
          {product && (
              <div className={styles.product}>
                <ul>
                  {product.map((product) => (
                    <li key={product._id}>
                      <img
                          src={imageUrlFor(buildImageObj(product.productImage))
                            .width(1200)
                            .height(Math.floor((9 / 16) * 1200))
                            .fit("crop")
                            .auto("format")
                            .url()}
                          alt={product.productImage.alt}
                        />
                        <span>{product.name}</span>
                        <button>Buy Now</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? formatDistance(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Mo, yyyy")}
              </div>
            )}
            {authors && <AuthorList items={authors} title="Authors" />}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default BlogPost;
