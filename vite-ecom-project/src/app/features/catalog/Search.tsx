import { TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setSearchTerm } from "./CatalogSlice";

export default function Search() {
  const { searchTerm } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  return (
    <TextField
      label="Search Product"
      variant="outlined"
      type="search"
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      fullWidth
    ></TextField>
  );
}
