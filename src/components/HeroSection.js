import React from "react";
import { Box, Typography } from "@mui/material";

const HeroSection = () => {
  return (
<Box
  sx={{
    position: "relative",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url('https://img.freepik.com/premium-photo/traditional-stilt-house-lush-rice-field_268722-37167.jpg?w=2000')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    color: "#FFFFFF",
  }}
>
<Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 20, 0, 0.55)",
      zIndex: 1,
    }}
  />

      <Box
        sx={{
          zIndex: 2,
          padding: "0 8px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, 
          }}
        >
          From Farm To Table, <br /> Across The Globe
        </Typography>
        <Typography
          variant="h6"
          color="rgb(255,255,255,0.9)"
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.25rem" },
            maxWidth: "650px",
            margin: "0 auto",
          }}
        >
          Highlight your ability to source products from around the world while
          prioritizing local and seasonal ingredients.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;