import {
  Button,
  ButtonGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/appHook';
import {
  fetchDailyMenuEn,
  fetchWeeklyMenuEn,
  fetchWeeklyMenuFi,
} from '../redux/slices/menuSlice';
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
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'x' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Popular times',
    },
  },
};

const labels = ['11:00', '11:30', '12:00', '12:30', '13:00', '13:30'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Predicted',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 200 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Fulfilled',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 200 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function RestaurantInfo() {
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

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

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
      onClick={
        () => updateChart()
        // console.log(ChartJS.instances[1].data)
      }
    >
      {date.toString().slice(0, 3)}
    </Button>
  ));

  function updateChart() {
    for (let i = 0; i <= 6; i++) {
      ChartJS.instances[1].data.datasets[0].data[i] = faker.datatype.number({
        min: 0,
        max: 200,
      });
    }
    for (let i = 0; i <= 6; i++) {
      ChartJS.instances[1].data.datasets[1].data[i] = faker.datatype.number({
        min: 0,
        max: 200,
      });
    }
    // ChartJS.instances[1].data.datasets[0].data.forEach(element => {
    //   console.log(element)
    //   element = faker.datatype.number({ min: 0, max: 200 })
    // });
    // ChartJS.instances[1].data.datasets[0].data[0] = faker.datatype.number({ min: 0, max: 200 })
    ChartJS.instances[1].update();
  }

  return (
    <MenuComponentBox margin={'auto'}>
      <Typography variant='h3'>Info</Typography>
      <Bar options={options} data={data} redraw={true} />
      <ButtonGroup variant='contained'>{renderButtons}</ButtonGroup>
    </MenuComponentBox>
  );
}
