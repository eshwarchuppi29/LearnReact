import { Typography, Grid } from "@mui/material";
import { useFetchBasketQuery } from "../../services/basketViewRepo";
import BasketItem from "./BasketItem";

export default function BasketView() {
  const { data, isLoading } = useFetchBasketQuery();
  console.log(data);
  // const basketData = data?.items;
  // const basketItems = basketData?.items;

  const basketItems = data?.flatMap((basket) => basket.items) ?? [];

  if (isLoading) {
    return (
      <div>
        <Typography variant="h6" color="red">
          Loading Basket...
        </Typography>
      </div>
    );
  }

  if (!basketItems || basketItems.length === 0) {
    return (
      <div>
        <Typography variant="h4" color="red">
          Your basket is empty
        </Typography>
      </div>
    );
  }

  return (
    <Grid container spacing={2}>
      {basketItems.map((item) => (
        <Grid key={item.productId}>
          <BasketItem item={item}></BasketItem>
        </Grid>
      ))}
    </Grid>
  );
}
