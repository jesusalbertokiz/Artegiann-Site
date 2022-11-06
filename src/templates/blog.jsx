import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { ThemeProvider, Typography } from "@mui/material"
import theme from "../theme"

export default function BlogTemplate({data}){
   
    console.log(data);
    
    return(
        <ThemeProvider
            theme={theme}
        >
            <Layout>
                <Typography variant='h1' color='primary'>
                {data.mdx.frontmatter.title}
                </Typography>
                <Typography variant='h2' color='primary'>
                    Este es el template de los blogs
                </Typography>
            </Layout>
        </ThemeProvider>
    )

}

export const blogData = graphql`
query blog($id: String){
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
      body
    }
  }
  
   
`
