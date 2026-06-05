import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router";

const midLinks = [
  {
    title: "Proudcts",
    path: "/productlist",
  },
  {
    title: "about",
    path: "/about",
  },
  {
    title: "contact",
    path: "/contact",
  },
];

const rightLinks = [
  {
    title: "login",
    path: "/login",
  },
  {
    title: "register",
    path: "/register",
  },
];

const navLinkStyle = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": { color: "grey.500" },
  "&.active": { color: "secondary.main" },
};

type props = {
  darkMode: boolean;
  changeMode: () => void;
};

const goToCart = () => {
  window.alert("Empty Cart");
};

export default function Navbar({ darkMode, changeMode }: props) {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              component={NavLink}
              to="/"
              sx={navLinkStyle}
              variant="h6"
            >
              Re-Store
            </Typography>
            <IconButton onClick={changeMode}>
              {darkMode ? (
                <LightMode sx={{ color: "yellow" }} />
              ) : (
                <DarkMode sx={{ color: "white" }} />
              )}
            </IconButton>
          </Box>
          <List sx={{ display: "flex" }}>
            {midLinks.map((item) => (
              <ListItem
                component={NavLink}
                to={item.path}
                key={item.path}
                sx={navLinkStyle}
              >
                {item.title.toUpperCase()}
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: "flex", alignItems: "right" }}>
            <IconButton size="large" color="inherit" onClick={goToCart}>
              <Badge badgeContent="9" color="secondary">
                <ShoppingCart></ShoppingCart>
              </Badge>
            </IconButton>
            <List sx={{ display: "flex" }}>
              {rightLinks.map((item) => (
                <ListItem
                  component={NavLink}
                  to={item.path}
                  key={item.path}
                  sx={navLinkStyle}
                >
                  {item.title.toUpperCase()}
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
