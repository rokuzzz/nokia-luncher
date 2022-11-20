import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/appHook';
import { fetchDailyMenuEn } from '../redux/slices/menuSlice';
import { MenuComponentBox } from '../styles/menu';
import { Course, MenuItem } from '../types/menuApiData';

export default function Menu() {
  useEffect(() => {
    const today = new Date();
    dispatch(fetchDailyMenuEn(today.toISOString().slice(0, 10)));
  }, []);

  const { dailyMenuEn } = useAppSelector((state) => state.menuReducer);

  const dispatch = useAppDispatch();

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

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
      onClick={() =>
        dispatch(fetchDailyMenuEn(date.toISOString().slice(0, 10)))
      }
    >
      {date.toString().slice(0, 3)}
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
  const renderMenuContent = populateCourseList(dailyMenuEn.courses).map(
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
            <Typography variant='subtitle1'>
              {meal.price.split('/')[0]}
            </Typography>
            <Typography variant='subtitle1'>
              {meal.price.split('/')[1]}
            </Typography>
          </Box>
          <Box margin={'auto 0'}>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Box>
        </Box>
        <Divider />
      </Box>
    )
  );

  return (
    <MenuComponentBox margin={'auto'}>
      <Typography
        variant='h5'
        display={'flex'}
        justifyContent={'center'}
        alignContent={'center'}
        sx={{
          mt: 3,
          fontWeight: '800',
        }}
      >
        {dailyMenuEn.meta.ref_title}
      </Typography>
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
                Next week
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => {
                  setCurrWeek(currWeek - 7);
                }}
              >
                Previous week
              </Button>
              {renderButtons}
            </>
          )}
        </ButtonGroup>
      </Box>
      <Box sx={{}}>{renderMenuContent}</Box>
    </MenuComponentBox>
  );
}
