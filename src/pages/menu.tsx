import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/appHook';
import { fetchDailyMenu } from '../redux/slices/menuSlice';
import { MenuComponentBox } from '../styles/menu';
import { Course, MenuItem, MenuItemInFavorites } from '../types/menu';
import { Link } from 'react-router-dom';
import MenuSkeleton from '../components/menu/MenuSkeleton';
import MenuError from '../components/menu/MenuError';
import { addRemoveFavorites } from '../redux/slices/favoritesSlice';
import NavigationBar from '../components/navigation/NavigationBar';

export default function Menu() {
  const today = new Date();
  useEffect(() => {
    dispatch(fetchDailyMenu(today.toISOString().slice(0, 10)));
  }, []);

  const { dailyMenu, isLoading, error } = useAppSelector(
    (state) => state.menuReducer
  );

  const { itemsInFavorites } = useAppSelector(
    (state) => state.favoritesReducer
  );

  const dispatch = useAppDispatch();

  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

  // 1 for the initial week from monday, 8 for the next week from monday
  const [currWeek, setCurrWeek] = useState(1);

  function getWeekFromStartDay(start: number) {
    const weekDays = [];
    const curr = new Date(); // get current date
    const first = curr.getDate() - curr.getDay() + start;

    for (let i = first; i < first + 5; i++) {
      let day = new Date(curr.setDate(i));
      weekDays.push(day);
    }
    return weekDays;
  }

  const renderButtons = getWeekFromStartDay(currWeek).map((date) => (
    <Button
      onClick={() => dispatch(fetchDailyMenu(date.toISOString().slice(0, 10)))}
    >
      {today === date ? (
        <Typography>Today</Typography>
      ) : (
        <Typography>
          {date.toString().slice(0, 3)} <br /> {date.toISOString().slice(8, 10)}
          .{date.toISOString().slice(5, 7)}
        </Typography>
      )}
    </Button>
  ));

  function countCourses(courses: Course | null) {
    if (courses != null) {
      return Object.keys(courses).length;
    } else {
      return 0;
    }
  }

  function populateCourseList(courses: Course | null) {
    let meals: MenuItem[] = [];
    if (courses != null) {
      for (let i = 1; i <= countCourses(courses); i++) {
        meals.push(courses[i]);
      }
      return meals;
    } else {
      return meals;
    }
  }

  let isLiked = false;
  const renderMenuContent = populateCourseList(dailyMenu.courses).map(
    (meal) => (
      <Box key={meal.category}>
        <Box
          maxWidth={isDownMedium ? '100%' : '65%'}
          display={'flex'}
          sx={{ pt: 2, pb: 2 }}
          alignItems={'start'}
          justifyContent={'space-between'}
        >
          <Box display={'flex'} flexDirection={'column'}>
            <Typography
              variant='body2'
              sx={{
                textTransform: 'uppercase',
                opacity: '55%',
              }}
            >
              {meal.category}
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{ fontWeight: '600', lineHeight: '1.3' }}
            >
              {meal.title_en}
            </Typography>
            <Typography> Prices: {meal.price}</Typography>
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
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          </Box>
        </Box>
        <Divider />
      </Box>
    )
  );

  return (
    <>
      <NavigationBar></NavigationBar>
      <MenuComponentBox margin={'auto'}>
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent='center'
          sx={{ width: '100%' }}
        >
          <Typography
            variant='h5'
            sx={{
              mt: 3,
              fontWeight: '800',
            }}
          >
            {dailyMenu.meta.ref_title}
          </Typography>
          <IconButton
            sx={{
              mt: 1,
            }}
          >
            <Link
              to='/info'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <InfoIcon />
            </Link>
          </IconButton>
        </Box>

        <Box
          display={'flex'}
          justifyContent={'center'}
          alignContent={'center'}
          sx={{ mt: 2 }}
        >
          <ButtonGroup
            variant='contained'
            size={isSmall ? 'small' : 'large'}
            aria-label='large button group'
          >
            {currWeek == 1 ? (
              <>
                {renderButtons}
                <Button onClick={() => setCurrWeek(currWeek + 7)}>
                  {isSmall ? (
                    <Typography>Next</Typography>
                  ) : (
                    <Typography>Next week</Typography>
                  )}
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => {
                    setCurrWeek(currWeek - 7);
                  }}
                >
                  {isSmall ? (
                    <Typography>Prev</Typography>
                  ) : (
                    <Typography>Previous week</Typography>
                  )}
                </Button>
                {renderButtons}
              </>
            )}
          </ButtonGroup>
        </Box>
        {isLoading && (
          <Box sx={{ mt: 1 }}>
            <MenuSkeleton items={6} />{' '}
          </Box>
        )}
        {!isLoading && populateCourseList(dailyMenu.courses).length ? (
          <Box sx={{ mt: 1 }}>{renderMenuContent}</Box>
        ) : (
          <></>
        )}
        {!isLoading && !populateCourseList(dailyMenu.courses).length ? (
          <MenuError isSmall={isSmall} />
        ) : (
          <></>
        )}
      </MenuComponentBox>
    </>
  );
}
