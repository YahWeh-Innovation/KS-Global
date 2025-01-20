import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import OurTeam from "../components/OurTeam";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductQuotationBanner from "../components/ProductQuotationBanner";
const AboutUs = () => {
  return (
    <Box>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          padding: { xs: "1rem", sm: "1.5rem", md: "2rem" },
          textAlign: "center",
          maxWidth: "1500px",
          margin: "64px auto",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            mb: 1,
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          About us
        </Typography>
        <Typography
          variant="h5"
          fontWeight="medium"
          sx={{
            mb: 3,
            color: "text.secondary",
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
          }}
        >
          Inspiring Food, Sustainable Future
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: { xs: 3, sm: 4, md: 5 },
            maxWidth: "700px",
            margin: "auto",
            color: "text.secondary",
            fontSize: { xs: "0.875rem", sm: "1rem" },
            px: { xs: 2, sm: 3, md: 0 },
          }}
        >
          Elevating the global food industry by providing sustainable,
          high-quality products that inspire and delight.
        </Typography>

        <Grid
          container
          spacing={{ xs: 4, sm: 3 }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "80px",
          }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                px: { xs: 1, sm: 2, md: 3 },
                maxWidth: { xs: "100%", md: "90%" },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  lineHeight: 1.8,
                  color: "text.secondary",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  mb: 2,
                }}
              >
                K.S. Global is a leading global food supplier dedicated to
                providing high-quality, sustainable, and ethically sourced
                products to businesses worldwide. With a strong focus on
                innovation and customer satisfaction, we have established
                ourselves as a trusted partner for foodservice, retail, and
                manufacturing industries in the India, US and UK.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  lineHeight: 1.8,
                  color: "text.secondary",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  mb: 2,
                }}
              >
                Founded in 2024, K.S. Global has grown from a small family
                business into a global leader.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  lineHeight: 1.8,
                  color: "text.secondary",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
              >
                We work closely with our customers to understand their unique
                needs and develop innovative food solutions.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                width: { xs: "280px", sm: "300px", md: "320px" },
                height: { xs: "320px", sm: "350px", md: "380px" },
                margin: "auto",
                mt: { xs: 2, md: 0 },
              }}
            >
              <Box
                component="img"
                src="https://t4.ftcdn.net/jpg/07/98/72/89/360_F_798728945_c7RghNy7K8nSSVYsisEJ7EladuShxT98.jpg"
                alt="Rama Kumar"
                sx={{
                  width: { xs: "240px", sm: "260px", md: "280px" },
                  height: { xs: "270px", sm: "290px", md: "310px" },
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: 3,
                }}
              />
              <Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: "-15%", md: "-18%" },
                    left: { xs: "-50%", sm: "-55%", md: "-60%" },
                    zIndex: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "13px", sm: "14px" },
                      fontWeight: "bold",
                    }}
                  >
                    Rama Kumar
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "11px", sm: "12px" },
                      color: "text.secondary",
                    }}
                  >
                    Founder
                  </Typography>
                </Box>
                <Box
                  component="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/640px-Outdoors-man-portrait_%28cropped%29.jpg"
                  alt="Dev Kapoor"
                  sx={{
                    border: "3px solid white",
                    position: "absolute",
                    bottom: { xs: "5%", md: "0%" },
                    left: { xs: "-50%", sm: "-55%", md: "-60%" },
                    width: { xs: "240px", sm: "260px", md: "280px" },
                    height: { xs: "270px", sm: "290px", md: "310px" },
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: 3,
                    zIndex: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    fontSize: { xs: "13px", sm: "14px" },
                    fontWeight: "bold",
                  }}
                >
                  Dev Kapoor
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "11px", sm: "12px" },
                    color: "text.secondary",
                  }}
                >
                  Co-Founder
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Box>
        <OurTeam></OurTeam>
      </Box> */}
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

export default AboutUs;
