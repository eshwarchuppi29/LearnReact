import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { router } from "../../routes/Routes";

const NotFound: React.FC = () => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
        py: 8,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 640,
          width: "100%",
          p: 5,
          borderRadius: 4,
          boxShadow: "0 24px 72px rgba(15, 23, 42, 0.35)",
          background: "rgba(15, 23, 42, 0.88)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: 72, md: 96 },
            fontWeight: 800,
            letterSpacing: "-0.04em",
            mb: 2,
          }}
        >
          404
        </Typography>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
          Page not found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "grey.300" }}>
          The page you are looking for does not exist or may have been moved.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => router.navigate("/")}
          sx={{ px: 4, py: 1.5, fontWeight: 700 }}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
