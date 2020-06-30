import React from "react"
import { Link } from "gatsby"
import Styles from "../../css/categories-widget.module.scss"

const Categories = () => {
  return (
    <div className={Styles.listCategories}>
      <ul>
        <li>
          <Link to="/">المكملات الغذائية</Link>
        </li>
        <li>
          <Link to="/">أهدافكم</Link>
        </li>
        <li>
          <Link to="/">العلامات التجارية</Link>
        </li>
        <li className={Styles.active}>
          <Link to="/">الأكسسوارات</Link>
        </li>
        <li>
          <Link to="/">المدونة</Link>
        </li>
        <li>
          <Link to="/">وصفات</Link>
        </li>
      </ul>
    </div>
  )
}

export default Categories
