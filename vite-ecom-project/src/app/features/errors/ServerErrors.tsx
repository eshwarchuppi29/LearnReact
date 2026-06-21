import { Paper, Typography } from "@mui/material";
import { useLocation } from "react-router";

export default function ServerErrors() {
  const { state } = useLocation();
  return (
    <Paper>
      {state.error ? (
        <>
          <Typography gutterBottom>{state.error}</Typography>
        </>
      ) : (
        <>
          <Typography gutterBottom>{state.error}</Typography>
        </>
      )}
    </Paper>
  );
}
