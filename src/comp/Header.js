import React from "react"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { Link } from "gatsby"
import Navbar from "../comp/header/Navbar"
import Styles from "../css/header.module.scss"
import Logo from "../assets/images/logo.png"
import logoMobile from "../assets/images/sub-logo-mobile.svg"
import logoLionHead from "../assets/images/logo-mobile.svg"

export default class Header extends React.Component {
  state = {
    mobileMenuActive: false,
  }

  handleMenuClick = () => {
    this.setState({
      mobileMenuActive: !this.state.mobileMenuActive,
    })
  }

  render() {
    return (
      <>
        <header className={Styles.header}>
          <div className={`${Styles.topLinksContainer} d-none d-lg-block`}>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <ul className={Styles.socialShare}>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/Nutrilionz.ma/"
                      >
                        <i>
                          <FaFacebookF />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/nutrilionz/"
                      >
                        <i>
                          <FaInstagram />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <div className={Styles.supportHeader}>
                    بحاجة إلى مساعدة ؟{" "}
                    <a href="tel:0537 29 44 40">0537 29 44 40</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={Styles.headerMiddle}>
            <div className="container">
              <div className={Styles.logoBox}>
                <div className="logo d-none d-lg-inline-block">
                  <img src={Logo} alt="" />
                </div>
                <div
                  className={`${Styles.logoMobile} d-inline-block d-lg-none`}
                >
                  <Link to="/">
                    <img src={logoLionHead} alt="Nutrilionz" />
                  </Link>
                </div>
              </div>
            </div>

            {this.state.mobileMenuActive ? (
              ""
            ) : (
              <button
                className={`${Styles.menuIcon} d-lg-none`}
                onClick={this.handleMenuClick}
              >
                <div>
                  <i></i>
                </div>
              </button>
            )}
          </div>
        </header>
        <div
          className={`${Styles.menuSubLogo} menu-sub-logo d-block d-lg-none`}
        >
          <div className="container">
            <div className={Styles.logoBox}>
              <Link to="/">
                <img src={logoMobile} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <Navbar
          menustats={this.state.mobileMenuActive}
          handleOpen={this.handleMenuClick}
        />
      </>
    )
  }
}
