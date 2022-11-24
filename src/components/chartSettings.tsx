import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "x" as const,
  type: Bar,
  maintainAspectRatio: false,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Popular times",
    },
  },
};

const labels = ["11:00", "11:30", "12:00", "12:30", "13:00", "13:30"];

const minVisitors = 10;
const maxVisitors = 300;
const lowEstimate = 0.25;
const medEstimate = 0.5;
const highEstimate = 0.75;
const rushEstimate = 1;

export const data = {
  labels,
  datasets: [
    {
      label: "Predicted",
      data: labels.map((time) => {
        // make more realistic data by having dailyVisitiors multiplied by settings
        if (time === "11:00") {
          return faker.datatype.number({
            min: minVisitors,
            max: maxVisitors * lowEstimate,
          });
        }
        if (time === "11:30") {
          return faker.datatype.number({
            min: maxVisitors * highEstimate,
            max: maxVisitors * rushEstimate,
          });
        }
        if (time === "12:00") {
          return faker.datatype.number({
            min: maxVisitors * medEstimate,
            max: maxVisitors * highEstimate,
          });
        }
        if (time === "12:30") {
          return faker.datatype.number({
            min: maxVisitors * lowEstimate,
            max: maxVisitors * medEstimate,
          });
        }
        if (time === "13:00") {
          return faker.datatype.number({
            min: minVisitors,
            max: maxVisitors * lowEstimate,
          });
        }
        if (time === "13:30") {
          return faker.datatype.number({
            min: minVisitors,
            max: maxVisitors * lowEstimate,
          });
        } else {
          return faker.datatype.number({ min: minVisitors, max: maxVisitors });
        }
      }),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Fulfilled",
      data: labels.map((time) => {
        // make more realistic data by having dailyVisitiors multiplied by settings
        if (time === "11:00") {
          return faker.datatype.number({
            min: minVisitors,
            max: maxVisitors * lowEstimate,
          });
        }
        if (time === "11:30") {
          return faker.datatype.number({
            min: maxVisitors * highEstimate,
            max: maxVisitors * rushEstimate,
          });
        }
        if (time === "12:00") {
          return faker.datatype.number({
            min: maxVisitors * medEstimate,
            max: maxVisitors * highEstimate,
          });
        }
        if (time === "12:30") {
          return faker.datatype.number({
            min: maxVisitors * lowEstimate,
            max: maxVisitors * medEstimate,
          });
        }
        if (time === "13:00") {
          return faker.datatype.number({
            min: minVisitors,
            max: maxVisitors * lowEstimate,
          });
        }
        if (time === "13:30") {
          return faker.datatype.number({
            min: minVisitors,
            max: maxVisitors * lowEstimate,
          });
        } else {
          return faker.datatype.number({ min: minVisitors, max: maxVisitors });
        }
      }),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function updateChart(labels: string[]) {
  const chartDataSet0 = Object.values(ChartJS.instances).filter(
    (c) => c.canvas.id === "chart"
  )[0].data.datasets[0];
  const chartDataSet1 = Object.values(ChartJS.instances).filter(
    (c) => c.canvas.id === "chart"
  )[0].data.datasets[1];
  labels.map((time) => {
    // make more realistic data by having dailyVisitiors multiplied by settings
    if (time === "11:00") {
      chartDataSet0.data[0] = faker.datatype.number({
        min: minVisitors,
        max: maxVisitors * lowEstimate,
      });
      chartDataSet1.data[0] = faker.datatype.number({
        min: minVisitors,
        max: maxVisitors * lowEstimate,
      });
    }
    if (time === "11:30") {
      chartDataSet0.data[1] = faker.datatype.number({
        min: maxVisitors * highEstimate,
        max: maxVisitors * rushEstimate,
      });
      chartDataSet1.data[1] = faker.datatype.number({
        min: maxVisitors * highEstimate,
        max: maxVisitors * rushEstimate,
      });
    }
    if (time === "12:00") {
      chartDataSet0.data[2] = faker.datatype.number({
        min: maxVisitors * medEstimate,
        max: maxVisitors * highEstimate,
      });
      chartDataSet1.data[2] = faker.datatype.number({
        min: maxVisitors * medEstimate,
        max: maxVisitors * highEstimate,
      });
    }
    if (time === "12:30") {
      chartDataSet0.data[3] = faker.datatype.number({
        min: maxVisitors * lowEstimate,
        max: maxVisitors * medEstimate,
      });
      chartDataSet1.data[3] = faker.datatype.number({
        min: maxVisitors * lowEstimate,
        max: maxVisitors * medEstimate,
      });
    }
    if (time === "13:00") {
      chartDataSet0.data[4] = faker.datatype.number({
        min: minVisitors,
        max: maxVisitors * lowEstimate,
      });
      chartDataSet1.data[4] = faker.datatype.number({
        min: minVisitors,
        max: maxVisitors * lowEstimate,
      });
    }
    if (time === "13:30") {
      chartDataSet0.data[5] = faker.datatype.number({
        min: minVisitors,
        max: maxVisitors * lowEstimate,
      });
      chartDataSet1.data[5] = faker.datatype.number({
        min: minVisitors,
        max: maxVisitors * lowEstimate,
      });
    }
  });
  Object.values(ChartJS.instances)
    .filter((c) => c.canvas.id === "chart")[0]
    .update();
  // Object.values(ChartJS.instances).filter((c) => c.canvas.id === 'chart')[0].update()
  // ChartJS.instances[1].update();
  // Object.values(ChartJS.instances).filter((c) => c.canvas.id === 'chart').pop()
  // console.log(Object.values(ChartJS.instances).filter((c) => c.canvas.id === 'chart'))
}
