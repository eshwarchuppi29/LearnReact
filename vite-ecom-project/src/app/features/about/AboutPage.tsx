import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import {
  useLazyResponse200OkQuery,
  useLazyResponse204NoContentQuery,
  useLazyResponse400BadRequestQuery,
  useLazyResponse401UnAuthorizedQuery,
  useLazyResponse404NotFoundQuery,
  useLazyResponse500InternalServerErrorQuery,
  useLazyResponse502BadGatewayQuery,
} from "../../services/errorResponse";

export default function AboutPage() {
  const [trig200] = useLazyResponse200OkQuery();
  const [trig204] = useLazyResponse204NoContentQuery();
  const [trig400] = useLazyResponse400BadRequestQuery();
  const [trig401] = useLazyResponse401UnAuthorizedQuery();
  const [trig404] = useLazyResponse404NotFoundQuery();
  const [trig500] = useLazyResponse500InternalServerErrorQuery();
  const [trig502] = useLazyResponse502BadGatewayQuery();

  const trigger200 = () => {
    trig200().catch((error) => console.log(error));
  };

  const trigger204 = () => {
    trig204().catch((error) => console.log(error));
  };

  const trigger400 = () => {
    trig400().catch((error) => console.log(error));
  };

  const trigger404 = () => {
    trig404().catch((error) => console.log(JSON.stringify(error)));
  };

  const trigger401 = () => {
    trig401().catch((error) => console.log(JSON.stringify(error)));
  };

  const trigger500 = () => {
    trig500().catch((error) => console.log(JSON.stringify(error)));
  };

  const trigger502 = () => {
    trig502().catch((error) => console.log(JSON.stringify(error)));
  };

  return (
    <Container>
      <Typography gutterBottom variant="h3">
        Error with Toast
      </Typography>
      <ButtonGroup fullWidth>
        <Button variant="contained" onClick={() => trigger200()}>
          200 Ok
        </Button>
        <Button variant="contained" onClick={() => trigger204()}>
          204 No Content
        </Button>
        <Button variant="contained" onClick={() => trigger400()}>
          400 Bad Request
        </Button>
        <Button variant="contained" onClick={() => trigger401()}>
          401 UnAuthorized
        </Button>
        <Button variant="contained" onClick={() => trigger404()}>
          404 Not Found
        </Button>
        <Button variant="contained" onClick={() => trigger500()}>
          500 Internal Server Error
        </Button>
        <Button variant="contained" onClick={() => trigger502()}>
          502 Bad Gateway
        </Button>
      </ButtonGroup>
    </Container>
  );
}
