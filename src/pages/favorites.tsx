import React, { useEffect } from 'react';
import {
  Typography,
  Divider,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import moment from 'moment';

import { MenuComponentBox } from '../styles/menu';
import { MenuOfTheDay } from '../types/menu';
import { useAppDispatch, useAppSelector } from '../hooks/appHook';
import { addRemoveFavorites } from '../redux/slices/favoritesSlice';
import NavigationBar from '../components/navigation/NavigationBar';
import FavoritesEmpty from '../components/favourites/FavoritesEmpty';
import { fetchWeeklyMenu } from '../redux/slices/menuSlice';

export default function Favorites() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeeklyMenu());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { weeklyMenu } = useAppSelector((state) => state.menuReducer);

  const { itemsInFavorites } = useAppSelector(
    (state) => state.favoritesReducer
  );

  function whenAvailable(mealString: string) {
    let noSpecialChars = weeklyMenu.timeperiod
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .slice(0, 4)
      .replace(/\s/g, '');
    if (noSpecialChars.length < 4) {
      noSpecialChars = '0' + noSpecialChars;
      console.log(noSpecialChars);
    }

    const menuTimePeriod = moment(
      moment().year() + noSpecialChars.slice(2, 4) + noSpecialChars.slice(0, 2)
    ).format();
    //If menu start date match current weeks start
    if (
      menuTimePeriod.slice(5, 8) + menuTimePeriod.slice(8, 10) ===
      moment().startOf('isoWeek').format().slice(5, 10)
    ) {
      //Current day of week as number
      let currDay = moment().day() - 1; //0 is monday
      let daysInMenu = Object.keys(weeklyMenu.mealdates).length; // 5

      let remainingDaysInWeekMenu: MenuOfTheDay[] = [];

      //List of remaining days of meals
      for (let i = currDay; i < daysInMenu; i++) {
        remainingDaysInWeekMenu.push(weeklyMenu.mealdates[i]);
      }

      let mealAvailableDate = '';

      //Loop thru each remaining menu days
      remainingDaysInWeekMenu.forEach((item) => {
        //Check if day courses is null
        if (typeof item !== 'undefined') {
          if (item.courses !== null) {
            //Count amount of courses/meals in one day
            let coursesAmount = Object.keys(item.courses).length;
            for (let i = 0; i < coursesAmount; i++) {
              //if course is not empty
              if (item.courses[i]) {
                //if api fetched course/meal title matches one called in function
                if (item.courses[i].title_fi === mealString) {
                  mealAvailableDate = item.date;
                }
              }
            }
          }
        }
      });
      if (mealAvailableDate === moment().format('dddd')) {
        return <Typography sx={{ color: 'green' }}>Available today</Typography>;
      } else if (mealAvailableDate !== '') {
        return (
          <Typography sx={{ color: '#e89c0e' }}>
            Available on {mealAvailableDate}
          </Typography>
        );
      } else {
        return (
          <Typography sx={{ color: 'red' }}>Not available this week</Typography>
        );
      }
    } else {
      return <Typography>Availability unknown</Typography>;
    }
  }
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

  let isLiked = false;

  const renderFavoritesContent = itemsInFavorites.map((meal) => (
    <Box key={meal.title_fi + meal.title_en + meal.category}>
      <Box
        maxWidth={isDownMedium ? '100%' : '65%'}
        display={'flex'}
        sx={{ pt: 2, pb: 2 }}
        alignItems={'start'}
        justifyContent={'space-between'}
      >
        <Box display={'flex'} flexDirection={'column'}>
          <Typography
            variant='subtitle2'
            sx={{ fontWeight: '600', lineHeight: '1.3' }}
          >
            {meal.title_en.length === 0 ? meal.title_fi : meal.title_en}
          </Typography>
          {whenAvailable(meal.title_fi)}
        </Box>
        <Box margin={'auto 0'}>
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
              <FavoriteIcon color='error' />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <Divider />
    </Box>
  ));

  return (
    <>
      <NavigationBar></NavigationBar>
      <MenuComponentBox margin={isSmall ? '0 0 80px 0' : 'auto'}>
        <Typography
          variant='h5'
          sx={{
            mt: 3,
            fontWeight: '800',
          }}
        >
          Favorites
        </Typography>
        {itemsInFavorites.length > 0 ? (
          <>{renderFavoritesContent}</>
        ) : (
          <FavoritesEmpty />
        )}
      </MenuComponentBox>
    </>
  );
}
