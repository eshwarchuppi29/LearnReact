import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export default function CheckOut() {
  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <Grid container spacing={3}>
        {/* Left Section */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Delivery Address
            </Typography>

            <Typography variant="body1">Mustureswara M M</Typography>

            <Typography color="text.secondary">
              #123, Hoodi,
              <br />
              Bengaluru, Karnataka
              <br />
              India - 560048
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              Payment Method
            </Typography>

            <RadioGroup defaultValue="upi">
              <FormControlLabel value="upi" control={<Radio />} label="UPI" />

              <FormControlLabel
                value="card"
                control={<Radio />}
                label="Credit / Debit Card"
              />

              <FormControlLabel
                value="netbanking"
                control={<Radio />}
                label="Net Banking"
              />

              <FormControlLabel
                value="cod"
                control={<Radio />}
                label="Cash on Delivery"
              />
            </RadioGroup>
          </Paper>
        </Grid>

        {/* Right Section */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Order Summary</Typography>

              <Divider sx={{ my: 2 }} />

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography>Items Total</Typography>
                <Typography>₹2,499</Typography>
              </Box>

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography>Delivery</Typography>
                <Typography color="success.main">FREE</Typography>
              </Box>

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography>GST</Typography>
                <Typography>₹450</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: "bold" }}>Total</Typography>

                <Typography sx={{ fontWeight: "bold" }} color="primary">
                  ₹2,949
                </Typography>
              </Box>

              <Button fullWidth variant="contained" size="large" sx={{ mt: 3 }}>
                Proceed to Payment
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
