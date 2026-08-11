import { Grid } from "@mui/material";
import type { Product } from "../../models/Product";
import ProductCard from "./ProductCard";

type props = {
  products: Product[];
};

export default function ProductView({ products }: props) {
  return (
    <div>
      <Grid container spacing={3}>
        {products.map((item) => (
          <Grid
            size={3}
            sx={{ display: "flex", justifyContent: "center" }}
            key={item.productId}
          >
            <ProductCard product={item}></ProductCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
