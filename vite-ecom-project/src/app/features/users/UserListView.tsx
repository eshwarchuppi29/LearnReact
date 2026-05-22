import { Button } from "@mui/material";
import type { User } from "../../models/User";
import UserCard from "./UserCard";

type PropsObeject = {
  passingUsers: User[];
  passingSetUser: () => void;
};

export default function UserView({
  passingUsers,
  passingSetUser,
}: PropsObeject) {
  console.log("Userview is rendering");
  return (
    <div>
      <UserCard passingUsers={passingUsers} />
      <Button variant="contained" onClick={passingSetUser}>
        Add
      </Button>
    </div>
  );
}
