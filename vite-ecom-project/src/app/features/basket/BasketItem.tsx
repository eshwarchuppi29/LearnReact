import { Add, Close, Remove } from "@mui/icons-material";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import type { Item } from "../../models/Basket";
import {
  useAddBasketItemMutation,
  useRemoveBasketItemMutation,
} from "../../services/basketViewRepo";
import { ConvertToIndianRupees } from "../../library/currencyFormatter";

type Props = {
  item: Item;
};

export default function BasketItem({ item }: Props) {
  const [removeBasketItem] = useRemoveBasketItemMutation();
  const [addItemToBasket] = useAddBasketItemMutation();

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        mb: 2,
        display: "flex",
        alignItems: "center",
        gap: 3,
      }}
    >
      {/* Product Image */}
      <Box
        component="img"
        src={item.image}
        alt={item.name}
        sx={{
          width: 100,
          height: 100,
          objectFit: "cover",
          borderRadius: 1,
          flexShrink: 0,
        }}
      />

      {/* Product Details */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6">{item.name}</Typography>

        <Typography variant="body2" color="text.secondary">
          {item.brand}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </Box>

      {/* Quantity Controls */}
      <Stack direction="row" spacing={1} alignItems="center">
        <IconButton
          color="error"
          sx={{ border: 1 }}
          onClick={() =>
            removeBasketItem({
              productId: item.productId,
              quantity: 1,
            })
          }
        >
          <Remove />
        </IconButton>

        <Typography fontWeight={600}>{item.quantity}</Typography>

        <IconButton
          color="success"
          sx={{ border: 1 }}
          onClick={() =>
            addItemToBasket({
              product: {
                productId: item.productId,
                name: item.name,
                description: item.description,
                image: item.image,
                brand: item.brand,
                price: item.price,
                stock: item.stock,
                type: "",
              },
              quantity: 1,
            })
          }
        >
          <Add />
        </IconButton>
      </Stack>

      {/* Price */}
      <Box sx={{ width: 170, textAlign: "right" }}>
        <Typography variant="body2">
          {ConvertToIndianRupees(item.price)} × {item.quantity}
        </Typography>

        <Typography variant="h6" color="primary" fontWeight="bold">
          {ConvertToIndianRupees(item.price * item.quantity)}
        </Typography>
      </Box>

      {/* Delete */}
      <IconButton
        color="error"
        onClick={() =>
          removeBasketItem({
            productId: item.productId,
            quantity: item.quantity,
          })
        }
      >
        <Close />
      </IconButton>
    </Paper>
  );
}
