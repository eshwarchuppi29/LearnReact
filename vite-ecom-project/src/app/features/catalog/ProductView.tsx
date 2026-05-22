import { Box } from "@mui/material";
import type { Product } from "../../models/Product";
import ProductCard from "./ProductCard";

type props = {
  products: Product[];
};

export default function ProductView({ products }: props) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {products.map((item) => (
          <ProductCard key={item.productId} product={item}></ProductCard>
        ))}
      </Box>
    </div>
  );
}
