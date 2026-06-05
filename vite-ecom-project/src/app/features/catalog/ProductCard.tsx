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

type props = {
  product: Product;
};
export default function ProductCard({ product }: props) {
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
        sx={{ height: 240, backgroundSize: "cover" }}
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
        <Button>Add to Cart</Button>
        <Button component={Link} to={`/productlist/${product.productId}`}>
          View
        </Button>
      </CardActions>
      <br></br>
    </Card>
  );
}
