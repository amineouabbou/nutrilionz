import React from "react"
import Header from "../comp/Header"
import { Helmet } from "react-helmet"
import Footer from "../comp/Footer"
import "../css/bootstrap.min.css"
import "../css/bootstrap-rtl.min.css"
import "../css/layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta name="googlebot" content="INDEX,FOLLOW" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
