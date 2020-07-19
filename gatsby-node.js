const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      wpgraphql {
        posts {
          nodes {
            id: databaseId
            slug
          }
        }

        categories {
          nodes {
            slug
            id
          }
        }

        recipes {
          nodes {
            databaseId
          }
        }
      }
    }
  `)

  result.data.wpgraphql.recipes.nodes.forEach(item => {
    createPage({
      path: `recipe/${item.databaseId}`,
      component: path.resolve(`./src/templates/recipe.js`),
      context: {
        id: item.databaseId,
      },
    })
  })

  result.data.wpgraphql.categories.nodes.forEach(item => {
    createPage({
      path: `category/${item.slug}`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        slug: item.slug,
        id: item.id,
      },
    })
  })

  result.data.wpgraphql.posts.nodes.forEach(item => {
    createPage({
      path: `post/${item.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: item.slug,
      },
    })
  })
}
