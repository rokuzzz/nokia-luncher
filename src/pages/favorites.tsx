import {
  Typography,
  Container,
  List,
  ListItem,
  Divider,
  ListItemText,
  Box,
  ButtonGroup,
  IconButton,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { MenuComponentBox } from '../styles/menu';
import { Course, MenuItem } from '../types/menu';

import React, { useState } from 'react';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function Favorites() {
  let parsedJSON = require('../mockdata.json');
  let favoriteMeals: MenuItem[] = [parsedJSON];

  const meals = favoriteMeals.map((meal) => (
    <ListItem>{meal.title_en}</ListItem>
  ));

  const renderFavoriteContent = favoriteMeals.map((meal) => (
    <Box key={meal.category}>
      <Box
        display={'flex'}
        sx={{ pt: 2, pb: 2 }}
        alignItems={'start'}
        justifyContent={'space-between'}
      >
        <Box display={'flex'} flexDirection={'column'}>
          <Typography> {meal.title_en} </Typography>
          <Typography> {meal.price} </Typography>
        </Box>
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
      </Box>
      <Divider />
    </Box>
  ));

  return (
    <MenuComponentBox margin={'auto'}>
      <Typography variant='h3'>Favorites</Typography>
      {renderFavoriteContent}
    </MenuComponentBox>
  );
}
