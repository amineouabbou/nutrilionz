import React from "react"
import Itemproduct from "../comp/products/Item"
import Styles from "../css/products.module.scss"

const Products = ({ products }) => {
  return (
    <div className={Styles.productsBox}>
      <div className={Styles.titleBox}>
        <h2>
          <span className={Styles.st}>
            <span>تسوق معنا</span>
          </span>
        </h2>
        <p>مكملات أصلية و مرخصة</p>
      </div>
      <div className={`container-fluid ${Styles.products}`}>
        <div className="row flex-row flex-nowrap">
          {products.map(item => (
            <Itemproduct
              key={item.id}
              title={item.title}
              fields={item.productFields}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
