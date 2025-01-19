import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const CategoryCard = ({ category }) => {
  return (

    <Box
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
        width: "100%",
        maxWidth: "250px",
        position: "relative",
        textAlign: "center",
        flexShrink: 0,
      }}
    >
     <Link href={"/product/all"}>
      <img
        src={category.image}
        alt={category.category}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          display: "block",
        }}
      />



      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      />
      <Typography
        variant="subtitle1"
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#fff",
          fontWeight: "bold",
          zIndex: 1,
        }}
      >
        {category.category}
      </Typography>
      </Link>
    </Box>
    
  );
};

export default CategoryCard;
