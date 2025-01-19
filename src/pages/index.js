import { Section } from "lucide-react";
import Head from "next/head";
import dbConnect from "../lib/dbConnect";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import ProductQuotationBanner from "../components/ProductQuotationBanner";
import Certification from "../components/Certification";
import FAQ from "../components/FAQ";
import PopularCategories from "../components/popularCategories";
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
        <Navbar />
        <HeroSection />
        <Box marginY={1}>
        </Box>
        <AboutUs />
        <Certification />
        <PopularCategories />
        <WhyChooseUs />
        <FAQ />
        <ProductQuotationBanner />
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
