import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Grid, Typography, Pagination } from "@mui/material";
import ProductCard from "../../components/product/ProductCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhyChooseUs from "../../components/WhyChooseUs";
import ProductQuotationBanner from "../../components/ProductQuotationBanner";
const ProductFilter = () => {
  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const filters = [
    "All",
    "Nuts",
    "Spices",
    "Agricultural Products",
    "Sweetners",
    "Lintels And Beans",
  ];

  const fetchProducts = async (filter, currentPage) => {
    setIsLoading(true);
    try {
      const endpoint = `/api/product/getData?${
        filter !== "All" ? `category=${filter}&` : ""
      }page=${currentPage}&limit=18`;
      const { data } = await axios.get(endpoint);
      setProducts(data.data);
      console.log("................", data.data);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts(activeFilter, page);
  }, [activeFilter, page]);

  return (
    <Box>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}>
        <Navbar />
      </Box>
      <Box sx={{
          flex: 1,
          mt: "64px",
          p: 4,
        }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Products
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          Taste the difference of truly farm-fresh products.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
            mb: 4,
          }}
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "contained" : "outlined"}
              color={activeFilter === filter ? "success" : "primary"}
              onClick={() => {
                setActiveFilter(filter);
                setPage(1);
              }}
              sx={{ textTransform: "capitalize" }}
            >
              {filter}
            </Button>
          ))}
        </Box>

        {isLoading ? (
          <Typography variant="h6" align="center">
            Loading products...
          </Typography>
        ) : products.length === 0 ? (
          <Typography variant="h6" align="center" sx={{ mt: 4 }}>
            No products found for the selected category.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={4} md={3} lg={2} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}

        {products.length > 0 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, newPage) => setPage(newPage)}
              color="primary"
              sx={{
                "& .MuiPaginationItem-root": {
                  bgcolor: "#ede6dc",
                  color: "#2b2118",
                  borderRadius: 2,
                  m: 0.5,
                  "&.Mui-selected": {
                    bgcolor: "#2b2118",
                    color: "#fff",
                  },
                  "&:hover": {
                    bgcolor: "#cbbfa9",
                  },
                },
              }}
            />
          </Box>
        )}
      </Box>
      <Box>
        <WhyChooseUs />
      </Box>
      <Box marginY={4}>
        <ProductQuotationBanner />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default ProductFilter;
