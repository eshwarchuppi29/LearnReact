import { useEffect, useState } from "react";
import type { Product } from "../../models/Product";
import { Link, useParams } from "react-router";
import {
  Button,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProductById] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;

    console.log("Product Initial Loading");

    fetch(`http://localhost:5199/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductById(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const productDetails = [
    {
      label: "Name",
      value: product?.name,
    },
    {
      label: "Brand",
      value: product?.brand,
    },
    {
      label: "Description",
      value: product?.description,
    },
    {
      label: "Stock",
      value: product?.stock,
    },
  ];

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Button component={Link} to={"/productlist"} sx={{ color: "primary" }}>
        Back
      </Button>
      <Grid container spacing={4} sx={{ maxWidth: "lg", mx: "auto" }}>
        {/* Left Side - Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <img
            src={product?.image}
            alt={product?.name}
            style={{ width: "100%" }}
          />
        </Grid>

        {/* Right Side - Details */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4">{product?.name}</Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h5" color="secondary">
            Rs. {product?.price} /-
          </Typography>

          <TableContainer>
            <Table
              sx={{
                "& td": { fontSize: "1rem" },
              }}
            >
              <TableBody>
                {productDetails.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      {item.label}
                    </TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid size={6}>
              <TextField
                variant="outlined"
                type="number"
                label="Quantity in Basket"
                fullWidth
                defaultValue={1}
              />
            </Grid>

            <Grid size={6}>
              <Button
                sx={{ height: "54px" }}
                color="primary"
                size="large"
                variant="contained"
                fullWidth
              >
                Add to basket
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

//6362809705
//160010807
