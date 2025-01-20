import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import ProductCard from "./ProductCard";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import axios from "axios";
import Link from "next/link";

const OurProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/product/getData?page=1&limit=8");
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ p: 3, margin: { xs: 3, sm: 6, md: 8 } }}>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mb: 4, fontWeight: "bold" }}
      >
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, textAlign: "center", color: "black" }}>
        <Link href={"product/all"}>
          <Button
            variant="outlined"
            color="black"
            sx={{ borderRadius: 50, px: 4, color: "black" }}
          >
            View All Products <ArrowRightAltIcon />
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default OurProduct;
