# INCIDENT REPORTING

### This is an API that stores an incident and displays it when queried.

<br />

The API has two endpoints, a `GET /incidents` endpoint and a `POST /report` endpoint.

When the GET request is called, the API fetches data from the incidents table of the postgreSQL database `ElephantSQL` and displays in json format, the data for to the user.

With the POST request, the user must send a body along with the request, preferrably in json format. The body sent by the user is then validated, top ensure the right values were sent. After validation, the city field of the body data is added to an [external weather api](https://openweathermap.org/current) to get the current weather at that location. The current date and weather are added to the body data and sent to the database.

<br />

## Technologies Used
-   NodeJS
-   Express
-   PostgreSQL

<br />

## How to run test in development
Download the repo to your local machine and run the following commands.

```
- npm install
- npm run dev (For development mode)
- npm run start (For production mode)
```

You are however supposed to provide a `database URI`, `weather API key` and `PORT number` in a `.env` file.

<br />

<!-- ## Endpoints

Note that all api endpoints are prefixed with `/api/v1/`

```
GET https://enyataapi.herokuapp.com/api/v1/incidents

POST https://enyataapi.herokuapp.com/api/v1/report
``` -->
