import { Box, Container } from "@mui/material";
import type { Product } from "../../models/Product";
import ProductView from "./ProductView";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, AddProduct] = useState<Product[]>([]);

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

  return (
    <Container maxWidth="xl">
      <Box
        sx={{ display: "flex", justifyContent: "center", gap: 3, marginY: 3 }}
      ></Box>
      <ProductView products={products}></ProductView>
    </Container>
  );
}
