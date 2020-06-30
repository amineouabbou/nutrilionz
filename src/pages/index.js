import React from "react"
import Layout from "../comp/Layout"
import Breadcrumbs from "../comp/Breadcrumbs"
//import Featuredposts from "../comp/home/Featuredposts"
import Homegrid from "../comp/home/Homegrid"
import Seo from "../comp/Seo"

export default function Home() {
  return (
    <Layout>
      <Seo></Seo>
      <Breadcrumbs title="الرئيسية" />
      <main>
        <div className="container">
          <Homegrid />
        </div>
      </main>
    </Layout>
  )
}
