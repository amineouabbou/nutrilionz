import React from "react"
import Styles from "../../css/products.module.scss"

const Itemproduct = ({ fields, title }) => {
  const {
    brand,
    photo: { sourceUrl },
    price,
    url,
  } = fields
  return (
    <div className="col-6 col-lg-4">
      <div className={Styles.item}>
        <div className={Styles.productImageArea}>
          <a target="_blank" href={url} rel="dofollow noreferrer">
            <img src={sourceUrl} alt="" />
          </a>
        </div>
        <div className={Styles.detailsArea}>
          <h4 className={Styles.productName}>
            <a
              target="_blank"
              href={url}
              title={title}
              rel="dofollow noreferrer"
            >
              <span>{title}</span>
              <strong>{brand}</strong>
            </a>
          </h4>
          <div className={Styles.priceBox}>
            <p className={Styles.oldPrice}>
              <span className={Styles.price}>درهم {price}</span>
            </p>
          </div>
          <div className={Styles.actions}>
            <a
              target="_blank"
              rel="dofollow noreferrer"
              href={url}
              className={Styles.addtocart}
            >
              <span>إشتري</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Itemproduct
