import { decrement, increment, reset } from "./counterReduce";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";

export default function ContactPage() {
  const { data } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>
        <Typography>The store CurrentStateValue: {data}</Typography>
        <ButtonGroup>
          <Button onClick={() => dispatch(increment(1))}>Increment</Button>
          <Button onClick={() => dispatch(decrement(1))}>Decrement</Button>
          <Button onClick={() => dispatch(increment(10))}>
            Increment By 10
          </Button>
          <Button onClick={() => dispatch(decrement(20))}>
            Decrement by 20
          </Button>
          <Button onClick={() => dispatch(reset())}>Reset</Button>
        </ButtonGroup>
      </div>
    </>
  );
}
