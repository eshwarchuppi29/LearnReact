import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import type { Item } from "../../models/Basket";
import { Add, Close, Remove } from "@mui/icons-material";

type Props = {
  item: Item;
};
export default function BasketItem({ item }: Props) {
  console.log(item.image);
  return (
    <Paper
      sx={{
        height: 150,
        borderRadius: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 1,
      }}
    >
      <Box
        component="img"
        src={item.image}
        alt={item.name}
        sx={{
          width: 100,
          height: 100,
          objectFit: "fill",
          borderRadius: "2px",
          mr: 8,
          ml: 4,
        }}
      ></Box>
      <Box display="flex" alignItems="center" gap={2}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography color="primary">{item.brand}</Typography>
        <Typography color="secondary">{item.description}</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1} sx={{ margin: 10 }}>
        <Typography sx={{ fontSize: "1.1rem" }}>
          Rs.{item.price} X {item.quantity}
        </Typography>
        <Typography
          color="primary"
          sx={{ fontSize: "1.2rem", fontWeight: 700 }}
        >
          Rs.{item.price * item.quantity}
        </Typography>
      </Box>
      <Grid container spacing={2} alignItems="center">
        <IconButton
          color="error"
          size="small"
          sx={{ borderRadius: 1, border: 1, minWidth: 0 }}
        >
          <Remove></Remove>
        </IconButton>
        <Typography variant="h6">{item.quantity}</Typography>
        <IconButton
          color="success"
          size="small"
          sx={{ borderRadius: 1, border: 1, minWidth: 0 }}
        >
          <Add></Add>
        </IconButton>
      </Grid>
      <IconButton
        color="error"
        size="small"
        sx={{
          borderRadius: 1,
          border: 1,
          minWidth: 0,
          alignSelf: "start",
          mr: 1,
          mt: 1,
        }}
      >
        <Close></Close>
      </IconButton>
    </Paper>
  );
}
