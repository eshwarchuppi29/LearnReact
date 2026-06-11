import { Box, Container } from "@mui/material";
import ProductView from "./ProductView";
import { useFetchProductsQuery } from "../../services/ProductList";

export default function ProductList() {
  const { data, isLoading } = useFetchProductsQuery();

  if (isLoading || !data) return <div>Loading...</div>;
  return (
    <Container maxWidth="xl">
      <Box
        sx={{ display: "flex", justifyContent: "center", gap: 3, marginY: 3 }}
      ></Box>
      <ProductView products={data}></ProductView>
    </Container>
  );
}
