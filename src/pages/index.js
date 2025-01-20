import { Section } from "lucide-react";
import Head from "next/head";
import dbConnect from "../lib/dbConnect";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import ProductQuotationBanner from "../components/ProductQuotationBanner";
import Certification from "../components/Certification";
import FAQ from "../components/FAQ";
import PopularCategories from "../components/popularCategories";
import OurProduct from "../components/product/OurProduct";
import { Box } from "@mui/material";
const Home = () => {
  dbConnect();
  return (
    <Box
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Head>
        <title>KS-Global</title>
        <meta name="description" content="Res portal" />
      </Head>
      <Box>
        <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}>
          <Navbar />
        </Box>
        <Box
          sx={{
            flex: 1,
            mt: "64px",
          }}
        >
          <HeroSection />
          <Box marginY={1}></Box>
          <AboutUs />
          <Certification />
          <PopularCategories />
          <OurProduct />
          <WhyChooseUs />
          <FAQ />
          <ProductQuotationBanner />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
