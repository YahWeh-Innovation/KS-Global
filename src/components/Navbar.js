import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  ListItemIcon,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}
      onClick={toggleDrawer}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/"
            sx={{
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/about"
            sx={{
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/product/all"
            sx={{
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Our Products" />
          </ListItemButton>
        </ListItem>
      </List>

      <Box sx={{ padding: 2 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#1C3C1F",
            color: "white",
            "&:hover": {
              backgroundColor: "#145C2C",
            },
          }}
          component={Link}
          href="/contact"
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#1B481F" }}>
        <Toolbar>
          <Box
            component="img"
            src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1734542860/Screenshot_2024-12-18_at_10.57.27_PM_a1ifmn.png"
            alt="K.S. Global Logo"
            sx={{
              height: 60,
              width: "auto",
              cursor: "pointer",
            }}
          />

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              flexGrow: 2,
              gap: 2,
            }}
          >
            <Button color="inherit" component={Link} href="/">
              Home
            </Button>
            <Button color="inherit" component={Link} href="/about">
              About Us
            </Button>
            <Button color="inherit" component={Link} href="/product/all">
              Our Products
            </Button>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                borderRadius: "20px",
                "&:hover": {
                  borderColor: "#DDD",
                },
              }}
              component={Link}
              href="/contact"
            >
              Contact Us
            </Button>
          </Box>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", sm: "none" }, ml: "auto" }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        {drawerContent}
      </Drawer>
    </>
  );
}
