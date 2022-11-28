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
import { useAppDispatch, useAppSelector } from '../hooks/appHook';
import { addRemoveFavorites } from '../redux/slices/favoritesSlice';

import React, { useState } from 'react';
import NavigationBar from '../components/navigation/NavigationBar';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function Favorites() {
  const dispatch = useAppDispatch();

  const { itemsInFavorites } = useAppSelector(
    (state) => state.favoritesReducer
  );

  let isLiked = false;
  const renderFavoriteContent = itemsInFavorites.map((meal) => (
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
        <IconButton
          onClick={() =>
            dispatch(
              addRemoveFavorites({
                title_en: meal.title_en,
                title_fi: meal.title_fi,
                category: meal.category,
                price: meal.price,
                additionalDietInfo: meal.additionalDietInfo,
                isLiked,
              })
            )
          }
        >
          {itemsInFavorites.findIndex(
            (item) => item.title_fi === meal.title_fi
          ) >= 0 ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </Box>
      <Divider />
    </Box>
  ));

  return (
    <>
      <NavigationBar></NavigationBar>
      <MenuComponentBox margin={'auto'}>
        <Typography
          variant='h5'
          sx={{
            mt: 3,
            fontWeight: '800',
          }}
        >
          Favorites
        </Typography>
        {renderFavoriteContent}
      </MenuComponentBox>
    </>
  );
}
