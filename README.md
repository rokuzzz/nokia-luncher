
# Nokia luncher

Restaurant menu application solution for Nokia, users of this application can see restaurant menu, info and congestion of a restaurant.



## Features

- Favoriting meals to see their availabity in future
- Graph to see fulfilled and predicted amount of visitors


## Demo

https://nokia-luncher.netlify.app/

## Run Locally

Clone the project

```bash
  git clone https://github.com/rokuzzz/nokia-luncher.git
```

Go to the project directory

```bash
  cd nokia-luncher
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## API Used

#### Get weekly menu items

```https
  https://www.sodexo.fi/en/ruokalistat/output/weekly_json/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Restaurant id, 80 for Nokia One |

#### Get daily menu items

```https
  https://www.sodexo.fi/en/ruokalistat/output/daily_json/{id}/{date}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Restaurant id, 80 for Nokia One |
| `date`      | `string` | **Required**. Date in format "YYYY-MM-DD" |


## Stack

- Axios
- Faker
- Jest
- Material Icons
- Material UI
- Moment.js
- React-chartjs-2
- React.js
- React Router
- Redux-persist
- React-Toastify
- Redux Toolkit
- TypeScript
## Authors

- [@rokuzzz](https://github.com/rokuzzz)
- [@TheKents0209](https://github.com/TheKents0209)

