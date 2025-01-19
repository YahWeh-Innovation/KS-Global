import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Pagination,
} from "@mui/material";
import ProductCard from "../../components/product/ProductCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhyChooseUs from "../../components/WhyChooseUs";
import ProductQuotationBanner from "../../components/ProductQuotationBanner";

const ProductFilter = () => {
  const [products, setProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const filters = [
    "Nuts",
    "Spices",
    "Agricultural Products",
    "Sweeteners",
    "Lentils And Beans",
  ];

  const fetchProducts = async (selectedFilters, currentPage) => {
    setIsLoading(true);
    try {
      const filterQuery =
        selectedFilters.length > 0
          ? `category=${selectedFilters.join(",")}&`
          : "";
      const endpoint = `/api/product/getData?${filterQuery}page=${currentPage}&limit=8`;
      const { data } = await axios.get(endpoint);
      setProducts(data.data);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts(selectedFilters, page);
  }, [selectedFilters, page]);

  const handleFilterChange = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
    setPage(1);
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
    setPage(1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          flex: 1,
          mt: "64px",
          p: 4,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "20%", pr: 4 }}>
            <Typography variant="h6" gutterBottom>
              Filters
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {filters.map((filter) => (
                <FormControlLabel
                  key={filter}
                  control={
                    <Checkbox
                      checked={selectedFilters.includes(filter)}
                      onChange={() => handleFilterChange(filter)}
                      color="primary"
                    />
                  }
                  label={filter}
                />
              ))}
            </Box>
            <Button
              variant="outlined"
              color="error"
              onClick={handleClearFilters}
              fullWidth
              sx={{ mt: 2 }}
            >
              Clear Filters
            </Button>
          </Box>

          <Box sx={{ width: "80%" }}>
            <Typography variant="h4" align="center" gutterBottom>
              Our Products
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 3 }}>
              Taste the difference of truly farm-fresh products.
            </Typography>
            {isLoading ? (
              <Typography variant="h6" align="center">
                Loading products...
              </Typography>
            ) : products.length === 0 ? (
              <Typography variant="h6" align="center" sx={{ mt: 8 }}>
                No products found for the selected filters.
              </Typography>
            ) : (
              <Grid container spacing={3}>
                {products.map((product) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
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
        </Box>
        <Box marginY={0}>
          <WhyChooseUs />
        </Box>
        <Box>
          <ProductQuotationBanner />
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default ProductFilter;
