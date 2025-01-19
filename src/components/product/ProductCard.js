import React from "react";
import { useRouter } from "next/router";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const currentPath = router.asPath;
  const href = currentPath.includes("/product")
    ? `${product.slug}`
    : `/product/${product.slug}`;

  return (
    <Box>
      <Link href={href} passHref>
        <Card
          sx={{
            maxWidth: 300,
            borderRadius: 2,
            textAlign: "center",
            boxShadow: "none",
            border: "0.5px solid rgba(128,128,128,0.3)",
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image={product.images.url}
            alt={product.name}
            sx={{
              objectFit: "cover",
              width: "auto",
              margin: "auto",
            }}
          />
          <CardContent
            sx={{
              marginBottom: "-16px",
            }}
          >
            <Typography
              variant="h6"
              textDecoration="none"
              sx={{
                margin: 0,
                fontSize: "1rem",
                lineHeight: 1,
              }}
            >
              {product.name}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default ProductCard;