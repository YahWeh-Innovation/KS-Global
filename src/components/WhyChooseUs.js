import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import whyChooseUsData from "../data/whyChooseUsData";
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        paddingTop: { xs: "16px", sm: "32px" },
        margin:{ xs: 3, sm: 6, md: 8 },
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
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#1B481F",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              <Box
                sx={{
                  color: "white",
                }}
              />
              {feature.icon}
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
