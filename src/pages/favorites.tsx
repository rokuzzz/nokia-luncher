import {
  Typography,
  Container,
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

export default function Favorites() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" mt={2} width="100%">
        Favorites
      </Typography>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </Container>
  );
}
