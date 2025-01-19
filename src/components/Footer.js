import React from "react";
import { Box, Typography, Link, IconButton, Stack, Divider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1B481F",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, md: 8 },
          flexWrap: "wrap",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="start"
          alignItems="center"
          spacing={3}
          fontSize={"14px"}
          sx={{ flexGrow: 1 }}
        >
          <TermsAndConditions />
          <PrivacyPolicy/>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <IconButton href="#" sx={{ color: "#fff" }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton href="#" sx={{ color: "#fff" }}>
            <YouTubeIcon />
          </IconButton>
          <IconButton href="#" sx={{ color: "#fff" }}>
            <InstagramIcon />
          </IconButton>
          <IconButton href="#" sx={{ color: "#fff" }}>
            <FacebookIcon />
          </IconButton>
        </Stack>
      </Box>

      <Divider
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          width: "90%",
          margin: "20px auto",
        }}
      />

      <Box>
        <Typography
          variant="body2"
          sx={{ color: "rgba(255, 255, 255, 0.8)", textAlign: "center" }}
        >
          © 2024 by K.S Global
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;