import {
  Typography,
  Container,
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Course, MenuItem } from '../types/menuApiData';

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

export default function Favorites() {

  let parsedJSON = require('../mockdata.json')
  let favoriteMeals: MenuItem[] = [parsedJSON]

  const meals = favoriteMeals.map((meal) =>
    <ListItem>
      {meal.title_en}
    </ListItem>
  )

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" mt={2} width="100%">
        Favorites
      </Typography>
      <List>
        {meals}
      </List>
    </Container>
  );
}
