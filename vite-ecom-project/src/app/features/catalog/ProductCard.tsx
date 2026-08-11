import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { Product } from "../../models/Product";
import { Link } from "react-router";
import { useAddBasketItemMutation } from "../../services/basketViewRepo";

type props = {
  product: Product;
};
export default function ProductCard({ product }: props) {
  const [addItemToBasket, { isLoading }] = useAddBasketItemMutation();
  return (
    <Card
      elevation={3}
      sx={{
        width: 280,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      style={{ border: "1px solid gray", margin: "10px" }}
    >
      <CardMedia
        sx={{ height: 200, backgroundSize: "cover" }}
        image={product.image}
      ></CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          sx={{ textTransform: "uppercase", color: "secondary.main" }}
          variant="subtitle2"
        >
          {product.name}
        </Typography>
        <Typography gutterBottom sx={{ color: "secondary.main" }} variant="h6">
          Rs.{(product.price / 100).toFixed(2)}
        </Typography>
        <Typography gutterBottom sx={{ color: "inherit", fontSize: "15px" }}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          disabled={isLoading}
          onClick={() => addItemToBasket({ product, quantity: 1 })}
        >
          Add to Cart
        </Button>
        <Button component={Link} to={`/productlist/${product.productId}`}>
          View
        </Button>
      </CardActions>
      <br></br>
    </Card>
  );
}
