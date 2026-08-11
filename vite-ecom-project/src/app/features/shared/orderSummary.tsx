import {
  Box,
  Typography,
  Divider,
  Button,
  TextField,
  Paper,
} from "@mui/material";
import { ConvertToIndianRupees } from "../../library/currencyFormatter";
import { useFetchBasketQuery } from "../../services/basketViewRepo";
import { Link } from "react-router";

export default function OrderSummary() {
  const { data } = useFetchBasketQuery();
  const basketItems = data?.items;

  const subtotal =
    basketItems?.reduce((sum, item) => sum + item.price * item.quantity, 0) ??
    0;

  const freeDeliverAmount = 5000;
  const deliveryFee = subtotal > freeDeliverAmount ? 0 : subtotal / 10 / 100;
  const discount = subtotal / 10 / 100;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        mx: "auto",
      }}
    >
      <Paper sx={{ mb: 2, p: 3, width: "100%", borderRadius: 3 }}>
        <Typography variant="h6" component="p" sx={{ fontWeight: "bold" }}>
          Order summary
        </Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic", color: "red" }}>
          Orders over {freeDeliverAmount} qualify for free delivery!
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography color="textSecondary">
              Subtotal: {ConvertToIndianRupees(subtotal)}
            </Typography>
            {/* <Typography>{ConvertToIndianRupees(subtotal)}</Typography> */}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography color="textSecondary">
              Discount:{ConvertToIndianRupees(discount)}
            </Typography>
            {/* <Typography color="success">
              {ConvertToIndianRupees(discount)}
            </Typography> */}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography color="textSecondary">
              Delivery fee: {ConvertToIndianRupees(deliveryFee)}
            </Typography>
            {/* <Typography>{ConvertToIndianRupees(deliveryFee)}</Typography> */}
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography color="textSecondary">
              Total: {ConvertToIndianRupees(subtotal + deliveryFee - discount)}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Button
            component={Link}
            to={`/checkout`}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mb: 1 }}
          >
            Checkout
          </Button>
          <Button fullWidth>Continue Shopping</Button>
        </Box>
      </Paper>

      {/* Coupon Code Section */}
      <Paper sx={{ width: "100%", borderRadius: 3, p: 3 }}>
        <form>
          <Typography variant="subtitle1" component="label">
            Do you have a voucher code?
          </Typography>

          <TextField
            label="Voucher code"
            variant="outlined"
            fullWidth
            sx={{ my: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Apply code
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
