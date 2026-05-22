import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              marginY: 0,
            }}
          >
            <Typography variant="h4">Store</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
