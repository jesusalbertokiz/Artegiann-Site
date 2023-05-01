import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Accordion, AccordionDetails, AccordionSummary, Grid, ThemeProvider, Typography } from "@mui/material"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ExpandMore } from "@mui/icons-material";
import theme from "../theme"

const BlogTemplate = ({data})=>{
    const detalles = data.mdx.frontmatter
    const image = getImage(data.mdx.frontmatter.banner.src.childrenImageSharp[0].gatsbyImageData)
    return(
        <ThemeProvider
            theme={theme}
        >
            <Layout>
                <Grid container spacing={3}  style={{  maxWidth:'95vw', margin:'1rem auto 3rem auto'}}>
                  <Grid
                    item={true}
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    
                  >
                    <Typography 
                      variant='h1' 
                      color='primary'
                      sx={{
                        fontSize: {
                          lg: '4rem',
                          md: '3.75rem',
                          sm: '3rem',
                          xs: '2.5rem'
                        },
                        
                        }}
                        style={{textAlign:'center'}}  
                    >

                    {data.mdx.frontmatter.title}
                    </Typography>
                    <GatsbyImage
                        width={350}
                        image={image}
                        alt={data.mdx.frontmatter.banner.alt}
                        style={{borderRadius:'20px', margin:'1rem auto'}}
                      />

                    <Accordion className="gradient" style={{borderRadius:'14px', maxWidth:'350px', backgroundColor:'transparent'}}>
                      <AccordionSummary
                        expandIcon={<ExpandMore style={{color:'white'}} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>
                          Detalles
                        </Typography>    
                      </AccordionSummary>
                      <AccordionDetails>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Fundación:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.fundacion}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Ubicación:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.ubicacion}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Estudiantes:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.estudiantes}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Programas:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.programas}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Campus:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.campus}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Características:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.caracteristicas}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Organización:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.organizacion}</Typography>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  <Grid
                  item={true}
                  lg={7}
                  md={7}
                  sm={12}
                  xs={12}
                  >

                  <Typography variant="body1" style={{marginTop:'6rem'}} color='white' dangerouslySetInnerHTML={{__html:data.mdx.body}}></Typography>   
                        
                        
                  </Grid>
                </Grid>
            </Layout>
        </ThemeProvider>
    )

}
export default BlogTemplate
export const blogData = graphql`
query universidad($id: String){
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      fundacion
      ubicacion
      estudiantes
      programas
      campus
      caracteristicas
      organizacion
      title
      slug
      type
      banner {
        src {
          childrenImageSharp {
            gatsbyImageData(formats: PNG, width: 800)
          }
        }
        alt
      }
    }
  }
}
`
export const Head = ({data}) => <title>{data.mdx.frontmatter.title}</title>
