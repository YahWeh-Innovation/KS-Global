import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const ProductQuotationBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1B481F",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px 40px",
        gap: "16px",
        marginX:{ xs: 3, sm: 6, md: 8 },
        marginY:{ xs: 2, sm: 3, md:4 },
        color: "#fff",
        borderRadius: "8px",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          flex: "1 1 auto",
          minWidth: "300px",
        }}
      >
        <Typography variant="subtitle1" sx={{ fontSize: "32px" }}>
          Need
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontSize: "48px", lineHeight: "1.2" }}
        >
          Product Quotation?
        </Typography>
      </Box>

      <Box
        sx={{
          flex: "1 1 auto",
          display: "flex",
          justifyContent: "end",
          mt: { xs: 2, sm: 0 },
        }}
      >
        <Link href={"/contact"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#2e4d23",
              fontWeight: "bold",
              padding: "15px",
              borderRadius: "0",
              width: {
                xs: "100%", 
                sm: "320px",
                md: "370px"
              },
              "&:hover": {
                backgroundColor: "#d9d9d9",
              },
            }}
          >
            Contact Us
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ProductQuotationBanner;
