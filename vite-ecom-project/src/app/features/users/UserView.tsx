import { Button } from "@mui/material";
import type { User } from "../../models/User";

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
      <label>Name</label>
      <input id="Name"></input>
      <ul>
        {passingUsers.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <Button variant="contained" onClick={passingSetUser}>
        Add
      </Button>
    </div>
  );
}
