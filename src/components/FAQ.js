import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import faqsData from "../data/frequentAskData";

const FAQ = () => {
  const [expanded, setExpanded] = useState("panel-0");

  const handleChange = (val) => {
    setExpanded(val === expanded ? "false" : val);
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: { xs: "16px", sm: "24px" },
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", marginBottom: "24px" }}
      >
        Frequently Asked Questions
      </Typography>

      {faqsData.map((faq, index) => (
        <Accordion
          expanded={expanded === `panel-${index}`}
          onChange={() => handleChange(`panel-${index}`)}
          key={index}
          sx={{
            marginBottom: "8px",
            border: "none",
            boxShadow: "none",
            backgroundColor:
              expanded === `panel-${index}` ? "#1B481F" : "#F4FBF5",
            color: expanded === `panel-${index}` ? "#FFFFFF" : "#000000",
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel-${index}` ? (
                <RemoveIcon sx={{ color: "#FFFFFF" }} />
              ) : (
                <AddIcon sx={{ color: "#000000" }} />
              )
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography sx={{ fontWeight: "bold" }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
