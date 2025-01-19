import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import aboutUsData from "../data/aboutUsData";
import Link from "next/link";

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#EFF2EF",
        paddingLeft: { xs: 3, sm: 6, md: 8 },
        borderRadius: "10px",
        border:"1px solid #F9F9F9",
        margin:{ xs: 3, sm: 6, md: 8 }
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            {aboutUsData.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 4, lineHeight: 1.8, color: "#555555" }}
          >
            {aboutUsData.description}
          </Typography>
          <Link href={"/about"}>
          <Button
            variant="outlined"
            sx={{
              padding: "10px 20px",
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: "bold",
              borderColor: "#000000",
              color: "#000000",
              "&:hover": {
                backgroundColor: "#000000",
                color: "#FFFFFF",
              },
            }}
          >
            {aboutUsData.buttonText}
          </Button>
          </Link>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              overflow: "hidden",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={aboutUsData.imageUrl}
              alt={aboutUsData.title}
              style={{
                width: "100%",
                height: "auto",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
