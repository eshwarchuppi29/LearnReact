import { Typography, Grid } from "@mui/material";
import { useFetchBasketQuery } from "../../services/basketViewRepo";
import BasketItem from "./BasketItem";
import OrderSummary from "../shared/orderSummary";

export default function BasketView() {
  const { data, isLoading } = useFetchBasketQuery();
  const basketItems = data?.items;

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
    <>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          {basketItems.map((item) => (
            <BasketItem key={item.productId} item={item} />
          ))}
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <OrderSummary />
        </Grid>
      </Grid>
    </>
  );
}
