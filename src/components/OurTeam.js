import React, { useState } from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import teamMemberData from "../data/teamData";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    const totalMembers = teamMemberData.length;
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalMembers - 1 : prevIndex - 1
      );
    } else if (direction === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalMembers - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <Box sx={{ p: 4, position: "relative"}}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}
      >
        Our Awesome Team
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: "gray",
          mb: 4,
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        A dedicated group of individuals who work tirelessly to exceed
        expectations.
      </Typography>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          marginTop: "20px",
          px: 3,
        }}
      >
        <IconButton
          onClick={() => handleScroll("prev")}
          sx={{
            position: "absolute",
            left: "-1%",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            padding: 1,
          }}
        >
          <WestIcon />
        </IconButton>

        <IconButton
          onClick={() => handleScroll("next")}
          sx={{
            position: "absolute",
            right: "-1%",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            padding: 1,
          }}
        >
          <EastIcon />
        </IconButton>

        <Grid
          container
          spacing={0}
          sx={{
            height: "100%",
            marginTop: "20px",
          }}
        >
          {teamMemberData
            .slice(currentIndex, currentIndex + 4)
            .map((member) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={member.id}
                sx={{
                  px: 2,
                }}
              >
                <TeamCard member={member} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurTeam;
