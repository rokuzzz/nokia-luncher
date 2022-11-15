import { Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function Error() {
    return (
      <Container maxWidth="md">
        <Typography variant="h3" align="center">
            Page not found
        </Typography>
        <Typography variant="h5" align="center" mt={2}>
            Uh oh, we can't seem to find the page you're looking for. 
            Try going back to the previous page or head back to our&nbsp;
            <Link to={`/`}>Menu</Link>
        </Typography>
      </Container>
    );
}