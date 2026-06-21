import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router";
import { useAppSelector } from "../store/store";
import { useFetchBasketQuery } from "../services/basketViewRepo";

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

export default function Navbar({ darkMode, changeMode }: props) {
  const { isLoading } = useAppSelector((state) => state.uiLoadIndicator);
  const { data } = useFetchBasketQuery();
  const cartCount = data?.length;
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
            <IconButton
              component={Link}
              to="/basket"
              size="large"
              color="inherit"
            >
              <Badge badgeContent={cartCount} color="secondary">
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
        {isLoading && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress aria-label="Loading…" color="secondary" />
          </Box>
        )}
      </AppBar>
    </>
  );
}
