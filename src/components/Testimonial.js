import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("/api/testimonial/get");
        setTestimonials(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  if (isLoading) {
    return (
      <Typography variant="h6" align="center">
        Loading Testimonials...
      </Typography>
    );
  }

  if (testimonials.length === 0) {
    return (
      <Typography variant="h6" align="center">
        No Testimonials Available
      </Typography>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
        padding: { xs: "16px", sm: "24px" },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", marginBottom: "32px" }}
      >
        Testimonials
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: "24px",
          color: "#666666",
          marginBottom: "32px",
          padding: { xs: "0 16px", sm: "0px" },
        }}
      >
        {currentTestimonial.description}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <Avatar
          src={currentTestimonial.image}
          alt={currentTestimonial.author}
          sx={{
            width: 80,
            height: 80,
            marginBottom: "8px",
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {currentTestimonial.author}
        </Typography>
        <Typography variant="body2" sx={{ color: "#666666", marginTop: "4px" }}>
          {currentTestimonial.role}
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
        }}
      >
        <IconButton
          onClick={handlePrevious}
          sx={{
            border: "2px solid #000000",
            backgroundColor: "#ffffff",
            color: "#00000f",
          }}
        >
          <WestOutlinedIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
        }}
      >
        <IconButton
          onClick={handleNext}
          sx={{
            border: "2px solid #000000",
            backgroundColor: "#ffffff",
            color: "#00000f",
          }}
        >
          <EastOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Testimonial;