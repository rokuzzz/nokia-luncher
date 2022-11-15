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
import { Course, MenuItem } from '../types/menuApiData';

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
  
  // for(let i = 0; i < ;)
  function countCourses(courses : Course | null) {
    if(courses != null) {
      return Object.keys(courses).length;
    } else {
      return 0
    }
  }

  function populateCourseList(courses: Course | null) {
    let meals: MenuItem[] = []
    if(courses != null) {
      for(let i = 1; i <= countCourses(courses); i++) {
        meals.push(courses[i])
      }
      return meals
    } else {
      return meals;
    }
  }
  const meals = populateCourseList(dailyMenuEn.courses).map((meal) =>
    <li>{meal.title_en}</li>
  )

  return (
    <>
      <h1>Menu</h1>
      {renderButtons}
      <Typography>
        {countCourses(dailyMenuEn.courses)}
      </Typography>
      <ul>{meals}</ul>
      {console.log(populateCourseList(dailyMenuEn.courses))}
    </>
  );
}
