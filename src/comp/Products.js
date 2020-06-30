import React from "react"
import Itemproduct from "../comp/products/Item"
import Styles from "../css/products.module.scss"

const Products = ({ products }) => {
  return (
    <div className={Styles.productsBox}>
      <div className={Styles.titleBox}>
        <h2>تسوق معنا</h2>
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
