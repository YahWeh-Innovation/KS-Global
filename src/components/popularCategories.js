import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, IconButton, CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CategoryCard from "./categoryCard";

const PopularCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const scrollRef = React.useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/product/getCategory");
        setCategories(response.data.data);
      } catch (err) {
        setError("Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", padding: "20px" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", padding: "20px" }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: "100%",
        minHeight: "320px",
        padding: "20px",
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Popular Categories
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: "20px",
          padding: "10px 0",
          width: "100%",
        }}
        ref={scrollRef}
      >
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "-30px",
          left: "20px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() => handleScroll("left")}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          onClick={() => handleScroll("right")}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PopularCategories;
