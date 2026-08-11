import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Paper,
  Radio,
} from "@mui/material";
import { useFethProductsFitersQuery } from "../../services/ProductList";
import Search from "./Search";

const sortOptions = [
  { value: "name", label: "Alphabetical" },
  { value: "price", label: "Price by lowest Hieghest" },
  { value: "priceDesc", label: "Price Hieghest to lowest" },
];

export default function Filters() {
  const { data, isLoading } = useFethProductsFitersQuery();
  if (isLoading) return <div>Loading...</div>;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Paper>
        <Search />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <FormControl>
          {sortOptions.map(({ value, label }) => (
            <FormControlLabel
              key={value}
              label={label}
              value={value}
              control={<Radio />}
            ></FormControlLabel>
          ))}
        </FormControl>
      </Paper>
      <Paper sx={{ p: 3 }}>
        <FormGroup>
          {data &&
            data.brands.map((item) => (
              <FormControlLabel
                key={item}
                value={item}
                control={<Checkbox color="secondary" />}
                label={item}
              />
            ))}
        </FormGroup>
      </Paper>
      <Paper sx={{ p: 3 }}>
        <FormGroup>
          {data &&
            data.types.map((item) => (
              <FormControlLabel
                key={item}
                value={item}
                control={<Checkbox color="secondary" />}
                label={item}
              />
            ))}
        </FormGroup>
      </Paper>
    </Box>
  );
}
