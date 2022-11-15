import { Button, Typography } from '@mui/material';
import { stringify } from 'querystring';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/appHook';
import {
  fetchDailyMenuEn,
  fetchWeeklyMenuEn,
  fetchWeeklyMenuFi,
} from '../redux/slices/menuSlice';

export default function Menu() {
  useEffect(() => {
    dispatch(fetchWeeklyMenuEn());
    dispatch(fetchWeeklyMenuFi());

    const today = new Date();
    dispatch(fetchDailyMenuEn(today.toISOString().slice(0, 10)));
  }, []);

  const { weeklyMenuEn, weeklyMenuFi, dailyMenuEn } = useAppSelector(
    (state) => state.menuReducer
  );

  const dispatch = useAppDispatch();

  // const renderMealdates = weeklyMenuEn.mealdates.map((menuOfTheDay) => (
  //   <Button>{menuOfTheDay.date}</Button>
  // ));

  interface CurrentWeek {
    days: string[];
    dates: string[];
  }

  let currDate = new Date();
  let currWeek = [];

  for (let i = 1; i <= 5; i++) {
    let first = currDate.getDate() - currDate.getDay() + i;
    let date = new Date(currDate.setDate(first));
    // let date = new Date(currDate.setDate(first)).toISOString().slice(0, 10)

    currWeek.push(date);
  }

  const renderButtons = currWeek.map((date) => (
    <Button
      onClick={() =>
        dispatch(fetchDailyMenuEn(date.toISOString().slice(0, 10)))
      }
    >
      {date.toString().slice(0, 3)}
    </Button>
  ));

  return (
    <>
      <h1>Menu</h1>
      {renderButtons}
      <Typography>
        {dailyMenuEn.courses?.[1].title_en}
      </Typography>
      {/* {console.log(dailyMenuEn.courses?.[1].title_en)} */}
    </>
  );
}
