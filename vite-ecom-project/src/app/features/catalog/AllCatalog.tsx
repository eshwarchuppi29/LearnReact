// import { useState } from "react";
import Navbar from "../../layouts/Navbar";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { Outlet } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { toggleDarkMode } from "../../settings/themeSetting";

export default function AllCatalog() {
  const darkMode = useAppSelector((state) => state.themeChange.darkMode);
  const dispatch = useAppDispatch();
  console.log(darkMode);

  const darkColor = "#000000";
  const lightColor = "#F5F5F5";

  // const [darkMode, addMode] = useState<boolean>(false);

  const palletType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: palletType,
      background: { default: palletType === "dark" ? darkColor : lightColor },
    },
  });

  const setMode = () => {
    dispatch(toggleDarkMode());
    console.log(darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Navbar darkMode={darkMode} changeMode={setMode} />
      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode ? darkColor : lightColor,
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 14 }}>
          {/* <ProductList></ProductList> */}
          <Outlet></Outlet>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
