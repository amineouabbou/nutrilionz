import React from "react"
import Postthumb from "../posts/Postthumb"
//import Postcover from "../posts/Postcover"
import { graphql, useStaticQuery } from "gatsby"
import Styles from "../../css/home-grid.module.scss"

const Homegrid = () => {
  const query = graphql`
    query getHomePosts {
      wpgraphql {
        posts {
          edges {
            node {
              date
              id: databaseId
              slug
              title
              featuredImage {
                sourceUrl(size: POST_THUMB_LIST)
              }
              categories {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `

  const {
    wpgraphql: { posts },
  } = useStaticQuery(query)
  return (
    <div className={`${Styles.homeGrid}`}>
      <div className="row row-10">
        {posts.edges.map(({ node }) => {
          return (
            <div key={node.id} className={`col-sm-4 ${Styles.placeholder}`}>
              <Postthumb data={node} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Homegrid
