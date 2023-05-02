import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "gatsby";

const ImageWithTextRight = ({ image, title, subtitle, link }) => {
  return (
    <Grid
      container
      spacing={2}
      style={{ minHeight: 400, maxWidth: "90vw", margin: "50px auto", alignItems: "center" }}
    >
      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 0 }}
      >
        <Typography
          variant="h2"
          color="primary"
          sx={{
            fontSize: {
              lg: "4rem",
              md: "3rem",
              sm: "2.5rem",
              xs: "2.3rem",
            },
            textAlign: {
              lg: "start",
              md: "start",
              sm: "start",
              xs: "center",
            },
          }}
          style={{ marginBottom: 20 }}
        >
          {title}
        </Typography>

        <Typography
          variant="subtitle1"
          color="white"
          style={{ marginBottom: 30, fontSize: "1.20rem", textAlign: "justify", padding: "15px" }}
        >
          {subtitle}
        </Typography>

        {link && (
          <Typography style={{ margin: "0 auto" }}>
            <Link style={{ color: "inherit", textDecoration: "none" }} to={link}>
              Ver más...
            </Link>
          </Typography>
        )}
      </Grid>
     
      <Grid
        item={true}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        {image}
      </Grid>
    
    </Grid>
  );
};

export default ImageWithTextRight;