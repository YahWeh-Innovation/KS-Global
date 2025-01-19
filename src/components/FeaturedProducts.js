import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Grid, IconButton, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProductCard from "./product/ProductCard";
import Link from "next/link";
   
const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/product/getData");
        if (response.data.success) {
          setProducts(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleScroll = (direction) => {
    const totalProducts = products.length;
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalProducts - 1 : prevIndex - 1
      );
    } else if (direction === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalProducts - 1 ? 0 : prevIndex + 1
      );
    }
  };

  if (products.length === 0) {
    return (
      <Typography variant="h5" align="center" sx={{ mt: 5 }}>
        Loading featured products...
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 4, position: "relative" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Featured Products
        </Typography>
        <Link href="/product/all" passHref>
          <Button
            variant="outlined"
            sx={{ borderRadius: 50, fontWeight: "bold", px: 4 }}
          >
            View All Products
          </Button>
        </Link>
      </Box>

      <Box sx={{ position: "relative", width: "100%" }}>
        <Grid container spacing={2}>
          {products.slice(currentIndex, currentIndex + 4).map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: -40,
          left: 16,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton onClick={() => handleScroll("prev")}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={() => handleScroll("next")}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FeaturedProducts;
