import { Box, Button, Container } from "@mui/material";
import type { Product } from "../../models/Product";
import ProductView from "./ProductView";

type props = {
  products: Product[];
  setProduct: () => void;
};

export default function ProductList({ products, setProduct }: props) {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{ display: "flex", justifyContent: "center", gap: 3, marginY: 3 }}
      >
        <Button variant="contained" onClick={setProduct}>
          Add-Product
        </Button>
      </Box>
      <ProductView products={products}></ProductView>
    </Container>
  );
}
