import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Components/assets/Logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          px: { xs: 1, md: 2 },
          py: { xs: 1.5, md: 1 },
          
          minHeight: "40px",
          justifyContent: "center",
          overflowX: "hidden",
          width: "100%",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            mr: { xs: 3, sm: 5, md: 5, lg: 2 }, // updated here
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={Logo}
            alt="GroHair Logo"
            sx={{
              height: { xs: 80, sm: 85, md: 85, lg: 80 },
              width: { xs: 170, sm: 210, md: 220, lg: 180 },
              pl: { xs: 1, md: 2 },
              pr: { xs: 1, md: 2 },
            }}
          />

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 4 }}>
              {navItems.map((item) => {
                const isActive = currentPath === item.to;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    style={{
                      textDecoration: "none",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#E2231A" : "#000",
                      borderBottom: isActive ? "3px solid #E2231A" : "none",
                      paddingBottom: 4,
                      fontSize: "1.1rem",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </Box>
          )}

          {/* Button / Drawer */}
          {isMobile ? (
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ fontSize: 30, color: "#000" }} />
            </IconButton>
          ) : (
            <Link to="/booknow" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#E2231A",
                  borderRadius: 1,
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  "&:hover": { backgroundColor: "#c81d15" },
                }}
              >
                Book Now
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile/Tablet */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: { xs: "75vw", sm: "65vw" },
            pt: 5,
            px: 2,
          
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => {
              const isActive = currentPath === item.to;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem button sx={{ py: 1.2 }}>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: isActive ? "#E2231A" : "#000",
                      }}
                    />
                  </ListItem>
                </Link>
              );
            })}
          </List>

          <Divider sx={{ my: 2 }} />

          <Link to="/booknow" style={{ textDecoration: "none" }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#E2231A",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                mt: 1,
                "&:hover": { backgroundColor: "#c81d15" },
              }}
            >
              Book Now
            </Button>
          </Link>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
