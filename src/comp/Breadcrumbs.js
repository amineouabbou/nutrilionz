import React from "react"
import { Link } from "gatsby"
import Styles from "../css/breadcrumbs.module.scss"
import HomeIcon from "../assets/images/icons/home.svg"

const Breadcrumbs = ({ title }) => {
  return (
    <div className={Styles.breadcrumbs}>
      <div className="container">
        <div className={Styles.list}>
          <ul>
            <li>
              <Link to="/">
                <img src={HomeIcon} alt="home" />
              </Link>
            </li>
            <li className={Styles.split}>
              <span>/</span>
            </li>
            <li>
              <strong>{title}</strong>
            </li>
          </ul>
        </div>
        <div className={Styles.subTitle}>
          <div className={Styles.title}>{title}</div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumbs
