import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import whyChooseUsData from "../data/whyChooseUsData";
const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        padding: { xs: "16px", sm: "32px" },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          marginBottom: { xs: "16px", sm: "32px" },
        }}
      >
        Why Choose Us?
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {whyChooseUsData.map((feature, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "18px",
                height: "18px",
                backgroundColor: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              <Box
                sx={{
                  width: "13px",
                  height: "13px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                }}
              />
            </Box>

            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "8px" }}
            >
              {feature.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: "300px" }}
            >
              {feature.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
