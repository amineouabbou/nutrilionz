import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import "../css/detail.scss"
import Layout from "../comp/Layout"
import Twocolumns from "../comp/layout/Twocolumns"
import { FaRegClock } from "react-icons/fa"
import Fbsharedesk from "../comp/Fbsharedesk"
import Shareit from "../comp/Shareit"
import Breadcrumbs from "../comp/Breadcrumbs"
import Seo from "../comp/Seo"
import Products from "../comp/Products"
import { nativeShareIt, isMobileDevice } from "../functions/func"
import { useLocation } from "@reach/router"
import moment from "moment"
import "moment/locale/ar-ma"
moment.locale("ar-ma")
//import Articlelist from "../comp/posts/Articlelist"

const Post = ({ data }) => {
  const [isMobile, setisMobile] = useState(null)
  const { pathname } = useLocation()

  const {
    wpgraphql: { postBy },
  } = data

  const { title, content, date, excerpt } = postBy
  const {
    featuredImage: { sourceUrl, imgTitle },
  } = postBy

  const { categories } = postBy
  const { title: metaTitle, metaDesc } = postBy.seo

  const {
    postProducts: { products, sommaireRepeater },
  } = postBy

  const seo = {
    title: metaTitle || title,
  }

  const { url } = data.site.siteMetadata

  useEffect(() => {
    isMobileFun()
  }, [])

  const shareFb = e => {
    e.preventDefault()
    nativeShareIt(seo.title, metaDesc, `${url}${pathname}`)
  }

  const isMobileFun = () => {
    if (isMobileDevice()) {
      setisMobile(true)
    }
  }

  const addIds = () => {
    const h2 = document.querySelectorAll(".std h2")
    h2.forEach((item, index) => {
      item.setAttribute("id", `paragraph-${index}`)
    })
  }

  useEffect(() => {
    addIds()
  })

  const categoryTitle = () => {
    const catTtitle = categories.edges.map(({ node }) => node.name)
    return catTtitle[0]
  }

  console.log(data)

  return (
    <>
      <Layout>
        <Seo
          title={seo.title}
          description={metaDesc}
          article="true"
          image={sourceUrl}
        ></Seo>
        <Breadcrumbs title={categoryTitle()} />
        <Twocolumns>
          <article className="col-sm-8">
            <div className="blog-detail">
              <div className="post-title-holder">
                <div className="title-box">
                  <h1 className="title">{title}</h1>
                </div>
                <div className="metas">
                  {categories.edges.map(({ node }) => (
                    <div key={node.catid} className="category">
                      {node.name}
                    </div>
                  ))}
                  <div className="date">
                    <i>
                      <FaRegClock />
                    </i>
                    {moment(date).fromNow()}
                  </div>
                </div>
              </div>

              <div className="img-thumb">
                <img src={sourceUrl} alt={imgTitle} />
              </div>

              {sommaireRepeater ? (
                <nav className="article-nav">
                  <ul>
                    {sommaireRepeater.map((item, index) => (
                      <li key={index}>
                        <a href={`#paragraph-${index}`}>{item.titre}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ) : null}

              {excerpt ? (
                <div
                  className="post-excerpt"
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
              ) : (
                ""
              )}

              <div
                className="std std-blog"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {products ? <Products products={products} /> : null}

              <div className="tags">
                <strong>تغذية</strong>
                <strong>تمارين</strong>
                <strong>بروتينات</strong>
                <strong>معلومات</strong>
              </div>

              <Fbsharedesk />
            </div>
            <div className="similar-post d-none">
              <div className="row">
                <div className="col-sm-10">
                  <h2>مقالات مشابهة</h2>
                  <p>Article list comp here</p>
                </div>
              </div>
            </div>
          </article>
        </Twocolumns>
      </Layout>
      {isMobile ? <Shareit sharer={shareFb} /> : ""}
    </>
  )
}

export default Post

export const query = graphql`
  query getPost($id: Int) {
    wpgraphql {
      postBy(postId: $id) {
        date
        title
        content
        excerpt
        categories {
          edges {
            node {
              catid: databaseId
              name
            }
          }
        }
        featuredImage {
          sourceUrl(size: BLOG_THUMB_DETAIL)
          imgTitle: title
        }
        seo {
          title
          metaDesc
        }

        postProducts {
          products {
            ... on WPGraphQL_Product {
              id: databaseId
              productFields {
                price
                brand
                url
                photo {
                  sourceUrl
                }
              }
              title
            }
          }

          sommaireRepeater {
            titre
          }
        }
      }
    }

    site {
      siteMetadata {
        url
      }
    }
  }
`
