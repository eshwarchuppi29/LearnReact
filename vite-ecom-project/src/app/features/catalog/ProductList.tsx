// import { Box, Container } from "@mui/material";
import ProductView from "./ProductView";
import { useFetchProductsQuery } from "../../services/ProductList";
import { Grid } from "@mui/material";
import Filters from "./Filters";
import { useAppSelector } from "../../store/store";

export default function ProductList() {
  const productParams = useAppSelector((state) => state.catalog);
  const { data, isLoading } = useFetchProductsQuery(productParams);

  if (isLoading || !data) return <div>Loading...</div>;
  return (
    <Grid container spacing={4}>
      <Grid size={3}>
        <Filters />
      </Grid>

      <Grid size={9}>
        <ProductView products={data} />
      </Grid>
    </Grid>
  );
}
