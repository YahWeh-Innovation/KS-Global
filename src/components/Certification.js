import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import certificateLogoData from "../data/certificateLogoData";
const scrollAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Certification = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const scrollAnimation = keyframes`
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    `;

  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        backgroundColor: "#fff",
        py: 4,
        margin:{ xs: 3, sm: 6, md: 8 }
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ fontWeight: "bold", mb: 8 }}
      >
        We Are Certified From
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "70px",
          overflow: "hidden",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box
          sx={{
            display: "inline-flex",
            gap: 16,
            animation: `${scrollAnimation} 30s linear infinite`,
            animationPlayState: isHovered ? "paused" : "running",
            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          {certificateLogoData.map((cert) => (
            <Box
              key={cert.id}
              component="img"
              src={cert.src}
              alt={cert.alt}
              sx={{
                width: 70,
                height: "auto",
                objectFit: "contain",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
          ))}
          {certificateLogoData.map((cert) => (
            <Box
              key={`${cert.id}-duplicate`}
              component="img"
              src={cert.src}
              alt={cert.alt}
              sx={{
                width: 70,
                height: "auto",
                objectFit: "contain",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Certification;
