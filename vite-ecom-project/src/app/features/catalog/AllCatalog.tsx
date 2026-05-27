import { useEffect, useState } from "react";
import type { Product } from "../../models/Product";
import ProductList from "./ProductList";
import Navbar from "../../layouts/Navbar";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

export default function AllCatalog() {
  const darkColor = "#000000";
  const lightColor = "#F5F5F5";
  const [products, AddProduct] = useState<Product[]>([]);
  const [darkMode, addMode] = useState<boolean>(false);

  const palletType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: palletType,
      background: { default: palletType === "dark" ? darkColor : lightColor },
    },
  });

  useEffect(() => {
    console.log("Product Initial Loading");

    fetch("http://localhost:5199/api/product")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        AddProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const setProduct = () => {
    AddProduct((prevState) => [
      ...products,
      {
        productId: prevState.length,
        name: "Product" + (prevState.length + 1),
        description: "Descrption" + (prevState.length + 2),
        price: 100,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      },
    ]);
  };

  const setMode = () => {
    addMode(!darkMode);
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
          <ProductList
            products={products}
            setProduct={setProduct}
          ></ProductList>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
