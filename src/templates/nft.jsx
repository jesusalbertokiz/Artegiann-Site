import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { ThemeProvider, Typography } from "@mui/material"
import theme from "../theme"

export default function NftTemplate({data}){
   
    console.log(data);
    
    return(
        <ThemeProvider
            theme={theme}
        >
            <Layout>
                <Typography variant='h1' color='primary'>
                {data.mdx.frontmatter.title}
                </Typography>
            </Layout>
        </ThemeProvider>
    )

}

export const nftData = graphql`
query nft($id: String){
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
      body
    }
  }
  
   
`
