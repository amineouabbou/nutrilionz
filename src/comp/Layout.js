import React from "react"
import Header from "../comp/Header"
import Footer from "../comp/Footer"
import "../css/bootstrap.min.css"
import "../css/bootstrap-rtl.min.css"
import "../css/layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
