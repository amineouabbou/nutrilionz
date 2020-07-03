import React from "react"
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
import moment from "moment"
import "moment/locale/ar-ma"
moment.locale("ar-ma")
//import Articlelist from "../comp/posts/Articlelist"

const Post = ({ data }) => {
  const {
    wpgraphql: { postBy },
  } = data

  const { title, content, date } = postBy
  const {
    featuredImage: { sourceUrl, imgTitle },
  } = postBy

  const { categories } = postBy
  const { metaTitle, metaDescription } = postBy.seoParams

  const {
    postProducts: { products },
  } = postBy

  const seo = {
    title: metaTitle || title,
  }

  return (
    <>
      <Layout>
        <Seo
          title={seo.title}
          description={metaDescription}
          article="true"
          image={sourceUrl}
        ></Seo>
        <Breadcrumbs title="تمارين" />
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
              <div
                className="std"
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
      <Shareit />
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
        seoParams {
          metaTitle
          metaDescription
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
        }
      }
    }
  }
`
