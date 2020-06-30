import React from "react"
import Layout from "../comp/Layout"
import "../css/category.scss"
import Breadcrumbs from "../comp/Breadcrumbs"
import Postcover from "../comp/posts/Postcover"
import Articlelist from "../comp/posts/Articlelist"
import Twocolumns from "../comp/layout/Twocolumns"
import { graphql } from "gatsby"
import Seo from "../comp/Seo"

const recipes = ({ data }) => {
  const { recipes } = data.wpgraphql
  const title = "وصفات متنوعة غنية بالبروتين، خاصة بممارسي رياضة كمال الأجسام"
  const description =
    "إكتشفو جديد الوصفات، المغذية و الغنية بالروتين و السعرات الحرارية، لزيادة أو نقصان الوزن"

  return (
    <Layout>
      <Seo title={title} article="false" description={description}></Seo>
      <Breadcrumbs title="وصفات" />
      <Twocolumns>
        <div className="col-sm-8">
          <div className="list-post">
            {recipes.edges.map(({ node }, index) => {
              let modulos = index % 5
              if (modulos === 0) {
                return (
                  <Postcover
                    urlpath={`/recipe/${node.id}`}
                    category="وصفات"
                    key={node.id}
                    data={node}
                  />
                )
              }
              return (
                <Articlelist
                  urlpath={`/recipe/${node.id}`}
                  category="وصفات"
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

export default recipes

export const query = graphql`
  query getReceipes {
    wpgraphql {
      recipes {
        edges {
          node {
            id: databaseId
            date
            title
            excerpt
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
    }
  }
`
