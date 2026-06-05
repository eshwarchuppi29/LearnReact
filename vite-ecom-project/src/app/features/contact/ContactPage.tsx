import { useDispatch, useSelector } from "react-redux";
import type { CounterState } from "./counterReduce";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { Decrement, Increment } from "../../store/cartStore";

export default function ContactPage() {
  const data = useSelector((state: CounterState) => state.data);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <Typography>The store CurrentStateValue: {data}</Typography>
        <ButtonGroup>
          <Button onClick={() => dispatch(Increment())}>Increment</Button>
          <Button onClick={() => dispatch(Decrement())}>Decrement</Button>
          <Button onClick={() => dispatch(Increment(10))}>
            Increment By 10
          </Button>
          <Button onClick={() => dispatch(Decrement(20))}>
            Decrement by 20
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}
