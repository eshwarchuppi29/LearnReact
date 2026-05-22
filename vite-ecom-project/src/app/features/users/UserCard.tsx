import type { User } from "../../models/User";
import UserCardView from "./UserCardView";

type PropsObeject = {
  passingUsers: User[];
};

export default function UserCard({ passingUsers }: PropsObeject) {
  return (
    <div>
      {passingUsers.map((item) => (
        <UserCardView userCard={item}></UserCardView>
      ))}
    </div>
  );
}
