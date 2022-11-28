import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/appHook';
import { fetchDailyMenu } from '../redux/slices/menuSlice';
import { MenuComponentBox } from '../styles/menu';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import NavigationBar from '../components/navigation/NavigationBar';
import CircleIcon from '@mui/icons-material/Circle';
import moment from 'moment';
import timesOpen from '../restaurantOpenMock.json';
import RoomIcon from '@mui/icons-material/Room';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { updateChart, data, options } from '../components/chartSettings';
import { Container } from '@mui/system';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function RestaurantInfo() {

  const { dailyMenu, isLoading, error } = useAppSelector(
    (state) => state.menuReducer
  );

  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useAppDispatch();

  const [currWeek, setCurrWeek] = useState(0);
  const [currDay, setCurrDay] = useState(moment().date())

  console.log(currDay)
  // const time = new Date();
  // console.log(time.toTimeString().slice(0,5))

  function getWeekFromStartDay(start: number) {
    const weekDays = [];
    for (let i = start; i < start + 5; i++) {
      let day = moment().startOf('isoWeek').add(i, 'days')
      weekDays.push(day);
    }
    return weekDays;
  }

  const renderButtons = getWeekFromStartDay(currWeek).map((date) => (
    <Button
      onClick={() => {
        if(date.date() !== currDay) {
          updateChart(
            Object.values(ChartJS.instances).filter(
              (c) => c.canvas.id === 'chart'
            )[0].data.labels as string[])
            setCurrDay(date.date())
        }
      }
    }
    >
      {moment().format().slice(0, 10) == date.format().slice(0, 10) ? (
        <Typography>Today</Typography>
      ) : (
        <Typography>
          {date.toString().slice(0, 3)} <br /> {date.format().slice(8, 10)}
          .{date.format().slice(5, 7)}
        </Typography>
      )}
    </Button>
  ));

  function isOpen(resId: number | string) {
    let restaurantTimes: any = [];
    restaurantTimes = timesOpen;

    const date = new Date();

    const key = resId.toString();
    const key2 = date
      .toLocaleDateString('en', { weekday: 'short' })
      .toLowerCase();
    const keyTarget = restaurantTimes[key as keyof typeof restaurantTimes];

    for (let i = 0; i < restaurantTimes.length; i++) {
      if (restaurantTimes[i].id === resId.toString()) {
        //Opening time
        const openTime = restaurantTimes[i][
          key2 as keyof typeof keyTarget
        ].slice(0, 5);

        //Closing time
        const closeTime = restaurantTimes[i][
          key2 as keyof typeof keyTarget
        ].slice(6, 11);

        //Current time
        const currentTime = moment().format().slice(11, 16);

        //If opening time is empty (eg. Empty list or weekend)
        if (openTime.length !== 0) {
          if (openTime <= currentTime && closeTime > currentTime) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
  }

  return (
    <>
      <NavigationBar></NavigationBar>
      <MenuComponentBox margin={"auto"}>
        <Typography
          variant="h5"
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          sx={{
            mt: 3,
            fontWeight: "800",
          }}
        >
          {dailyMenu.meta.ref_title}
        </Typography>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <CircleIcon sx={{ color: "red", fontSize: "small" }}></CircleIcon>
          <Typography>&nbsp; Low Capacity &nbsp;</Typography>
          {isOpen("80") ? (
            <>
              <CircleIcon
                sx={{ color: "green", fontSize: "small" }}
              ></CircleIcon>
            </>
          ) : (
            <>
              <CircleIcon
                sx={{ color: "gray", fontSize: "small" }}
              ></CircleIcon>
            </>
          )}
          <Typography> &nbsp;Open: 11:00-13:30</Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Box display={"flex"} sx={{ mt: 2 }}>
            <RoomIcon></RoomIcon>
            <Typography sx={{marginRight: 5}}>Karakaari 7A</Typography>
            <ContactPhoneIcon></ContactPhoneIcon>
            <Typography sx={{marginLeft: 1}}>0505244601</Typography>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"} sx={{mt: 5}}>
          <ButtonGroup variant="contained">{renderButtons}</ButtonGroup>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignContent={"center"}>
          {isDownMedium ? (
            <Box sx={{ mt: 3, height: "350px", width: "100%" }}>
              <Bar options={options} data={data} redraw={true} id={"chart"} />
            </Box>
          ) : (
            <Box sx={{ mt: 3, height: "350px", width: "70%" }}>
              <Bar options={options} data={data} redraw={true} id={"chart"} />
            </Box>
          )}
        </Box>
      </MenuComponentBox>
    </>
  );
}
