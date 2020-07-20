import React from "react"
import Layout from "../comp/Layout"
import "../css/category.scss"
import Breadcrumbs from "../comp/Breadcrumbs"
import Postcover from "../comp/posts/Postcover"
import Articlelist from "../comp/posts/Articlelist"
import Twocolumns from "../comp/layout/Twocolumns"
import Seo from "../comp/Seo"
import { graphql } from "gatsby"

const category = ({ data }) => {
  const { category } = data.wpgraphql
  const { title, metaDesc } = category.seo
  const seo = {
    title: title || category.name,
  }

  return (
    <Layout>
      <Seo title={seo.title} description={metaDesc}></Seo>
      <Breadcrumbs title={category.name} />
      <Twocolumns>
        <div className="col-sm-8">
          <div className="list-post">
            {category.posts.edges.map(({ node }, index) => {
              let modulos = index % 5
              if (modulos === 0) {
                return (
                  <Postcover
                    urlpath={`/post/${node.slug}`}
                    category={category.name}
                    key={node.id}
                    data={node}
                  />
                )
              }
              return (
                <Articlelist
                  urlpath={`/post/${node.slug}`}
                  category={category.name}
                  key={node.id}
                  data={node}
                />
              )
            })}
          </div>
        </div>
      </Twocolumns>
    </Layout>
  )
}

export default category

export const query = graphql`
  query getCategory($id: ID!) {
    wpgraphql {
      category(id: $id) {
        name
        posts {
          edges {
            node {
              title
              date
              excerpt
              id: databaseId
              slug
              featuredImage {
                mediaDetails {
                  sizes {
                    name
                    sourceUrl
                  }
                }
                imgTtitle: title
              }
            }
          }
        }
        seo {
          title
          metaDesc
        }
      }
    }
  }
`
