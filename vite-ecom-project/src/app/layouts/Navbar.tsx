import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

type props = {
  darkMode: boolean;
  changeMode: () => void;
};

export default function Navbar({ darkMode, changeMode }: props) {
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
            <IconButton onClick={changeMode}>
              {darkMode ? (
                <LightMode sx={{ color: "yellow" }} />
              ) : (
                <DarkMode sx={{ color: "white" }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
