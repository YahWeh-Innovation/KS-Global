import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FeaturedProducts from "../../components/FeaturedProducts";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhyChooseUs from "../../components/WhyChooseUs";
import ProductQuotationBanner from "../../components/ProductQuotationBanner";

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expanded, setExpanded] = useState("description");

  useEffect(() => {
    if (slug) {
      fetchProduct(slug);
    }
  }, [slug]);

  const fetchProduct = async (slug) => {
    try {
      const response = await axios.get(`/api/product/getId?slug=${slug}`);
      if (response.data.success) {
        setProduct(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const handleImageChange = (direction) => {
    const totalImages = product.images.length;
    if (direction === "prev") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? totalImages - 1 : prevIndex - 1
      );
    } else if (direction === "next") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === totalImages - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  if (!product) {
    return (
      <Typography variant="h5" align="center" sx={{ mt: 5 }}>
        Loading product details...
      </Typography>
    );
  }

  return (
    <Box>
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
        <Box sx={{ p: 4 }}>
          <Grid
            container
            spacing={3}
            sx={{
              flexDirection: {
                xs: "column-reverse",
                md: "row",
              },
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                {product.name}
              </Typography>

              <Accordion
                expanded={expanded === "description"}
                onChange={handleAccordionChange("description")}
                disableGutters
                sx={{
                  boxShadow: "none",
                  border: "none",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="description-content"
                  id="description-header"
                >
                  <Typography fontSize="1.2rem" variant="h6">
                    Description
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">{product.description}</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "keyBenefits"}
                onChange={handleAccordionChange("keyBenefits")}
                disableGutters
                sx={{
                  boxShadow: "none",
                  border: "none",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="benefits-content"
                  id="benefits-header"
                >
                  <Typography fontSize="1.2rem" variant="h6">
                    Key Benefits
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>
                        <Typography variant="body1">{benefit.title}</Typography>
                      </li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "howToUse"}
                onChange={handleAccordionChange("howToUse")}
                disableGutters
                sx={{
                  boxShadow: "none",
                  border: "none",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="usage-content"
                  id="usage-header"
                >
                  <Typography fontSize="1.2rem" variant="h6">
                    How To Use
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {product.usage.map((usage, index) => (
                      <li key={index}>
                        <Typography variant="body1">{usage.type}</Typography>
                      </li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <IconButton
                  onClick={() => handleImageChange("prev")}
                  sx={{ position: "absolute", left: 0 }}
                >
                  <ArrowBackIosIcon />
                </IconButton>
                <img
                  src={product.images[currentImageIndex].url}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "400px",
                    borderRadius: "8px",
                  }}
                />
                <IconButton
                  onClick={() => handleImageChange("next")}
                  sx={{ position: "absolute", right: 0 }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={product.name}
                    onClick={() => setCurrentImageIndex(index)}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "4px",
                      border:
                        currentImageIndex === index
                          ? "2px solid #000"
                          : "2px solid transparent",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
        <WhyChooseUs />
      </Box>
      <Box marginBottom={8}>
        <FeaturedProducts />
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

export default ProductPage;
