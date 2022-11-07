import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Accordion, AccordionDetails, AccordionSummary, Grid, ThemeProvider, Typography } from "@mui/material"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ExpandMore } from "@mui/icons-material";
import theme from "../theme"

const NftTemplate = ({data})=>{
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
                          <Typography>Estilo de ropa:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.ropa}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Hibrido:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.hibrido}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Edad:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.edad}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Poder:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.poder}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Altura:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.altura}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Padre:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.padre}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Madre:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.madre}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Nacimiento:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.nacimiento}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Oriundo:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.oriundo}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Gustos:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.gustos}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Miedos:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.miedos}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Habilidades:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.habilidades}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Temperamento:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.temperamento}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Personalidad:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.personalidad}</Typography>
                        </div>
                        <div style={{display:"flex", justifyContent:'space-between', color:'grey', margin:'2.5rem 0' }}>
                          <Typography>Defectos:</Typography>
                          <Typography style={{textAlign:'end', width:'70%', color:'white'}}>{detalles.defectos}</Typography>
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
export default NftTemplate
export const nftData = graphql`
query nft($id: String){
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        defectos
        edad
        gustos
        habilidades
        hibrido
        madre
        nacimiento
        miedos
        oriundo
        padre
        personalidad
        poder
        ropa
        slug
        temperamento
        title
        type
        altura
        banner {
          src {
            childrenImageSharp {
              gatsbyImageData(formats: PNG, width: 350)
            }
          }
          alt
        }
        title
      }
    }
  }
  
   
`
export const Head = ({data}) => <title>{data.mdx.frontmatter.title}</title>
