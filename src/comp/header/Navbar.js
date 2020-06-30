import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Styles from "../../css/nav.module.scss"
import HomeIcon from "../../assets/images/icons/home.svg"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

const Navbar = ({ menustats, handleOpen }) => {
  const query = graphql`
    query getCategoriesMenu {
      wpgraphql {
        categories(where: { exclude: "1" }) {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  `

  const {
    wpgraphql: {
      categories: { nodes },
    },
  } = useStaticQuery(query)

  return (
    <>
      <nav
        className={`${Styles.mainNav} ${menustats ? `${Styles.active}` : ""}`}
      >
        <button
          onClick={handleOpen}
          className={`${Styles.closeSidebarMenu} d-lg-none`}
        >
          <i className={Styles.iconCancel}></i>
        </button>
        <div className={`${Styles.container} container`}>
          <div className={`${Styles.topBox} d-lg-none`}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/Nutrilionz.ma/"
            >
              <i>
                <FaFacebookF />
              </i>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/nutrilionz/"
            >
              <i>
                <FaInstagram />
              </i>
            </a>
          </div>
          <ul>
            <li className="home d-none d-lg-inline-block">
              <Link to="/">
                <img src={HomeIcon} alt="home" />
              </Link>
            </li>
            {nodes.map(item => (
              <li key={item.id}>
                <Link
                  to={`/category/${item.slug}`}
                  activeClassName={Styles.active}
                >
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link to="/recipes/" activeClassName={Styles.active}>
                <span>وصفات</span>
              </Link>
            </li>
            <li className="d-lg-none">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.nutrilionz.ma/ar/"
              >
                <span>
                  متجرنا <strong className={Styles.badge}>حصري</strong>
                </span>
              </a>
            </li>
          </ul>
          <div className={`${Styles.bottomBox} d-lg-none`}>
            <div className="support-header">
              <span>بحاجة للمساعدة ؟</span>{" "}
              <a href="tel:0537 29 44 40">06-666-984</a>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${Styles.mobileNavOverlay} ${
          menustats ? `${Styles.active}` : ""
        }`}
      ></div>
    </>
  )
}

export default Navbar
