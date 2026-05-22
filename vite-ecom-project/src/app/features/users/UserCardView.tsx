import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { User } from "../../models/User";

type PropsObeject = {
  userCard: User;
};
export default function UserCardView({ userCard }: PropsObeject) {
  return (
    <div>
      <Card elevation={10}>
        <CardMedia sx={{ height: 240, backgroundSize: "conver" }}></CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ textTransform: "uppercase" }}
            variant="subtitle2"
          >
            {userCard.title}
          </Typography>
          <Typography sx={{ color: "secondary.main" }} variant="h6">
            ${userCard.userId}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button>Add to Cart</Button>
          <Button>View Cart</Button>
        </CardActions>
      </Card>
    </div>
  );
}
