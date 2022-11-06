const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`src/templates/blog.jsx`)
  const nftTemplate = path.resolve(`src/templates/nft.jsx`)
  const result = await graphql(`
  query{
    allMdx {
      nodes {
        frontmatter {
          slug
          type
        }
        id
      }
    }
  }
  
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes

  // you'll call `createPage` for each result
  posts.forEach(node => {
    
    if(node.frontmatter.type == "nft"){
        createPage({
            // As mentioned above you could also query something else like frontmatter.title above and use a helper function
            // like slugify to create a slug
            path: node.frontmatter.slug,
            // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
            component: nftTemplate,
            // You can use the values in this context in
            // our page layout component
            context: { id: node.id },
          })
    }
    if(node.frontmatter.type == "blog"){
        createPage({
            // As mentioned above you could also query something else like frontmatter.title above and use a helper function
            // like slugify to create a slug
            path: node.frontmatter.slug,
            // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
            component: blogTemplate,
            // You can use the values in this context in
            // our page layout component
            context: { id: node.id },
          })
    }
    
  })
}
