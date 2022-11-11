import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks/appHook';
import { fetchWeeklyMenuEn, fetchWeeklyMenuFi } from '../redux/slices/menuSlice';

export default function Menu() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWeeklyMenuEn())
    dispatch(fetchWeeklyMenuFi())
  }, []);

  return (
    <>
      <h1>Menu</h1>
      <Link to={`favorites`}>Favorites</Link>
      <Typography variant='h1'>Scroll</Typography>
      <Typography variant='h1'>Scroll</Typography>
      <Typography variant='h1'>Scroll</Typography>
      <Typography variant='h1'>Scroll</Typography>
      <Typography variant='h1'>Scroll</Typography>
      <Typography variant='h1'>Scroll</Typography>
      <Typography variant='h1'>Scroll</Typography>
      <Typography variant='h1'>Scroll</Typography>
      <Typography variant='h1'>Scroll</Typography>
      <Typography variant='h1'>Scroll</Typography>
    </>
  );
}
