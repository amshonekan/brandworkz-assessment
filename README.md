# A Simple Weather App

This is a frontend weather app for a technical assessment. The brief is to create a simple weather application with the following requirements:

- The application should be responsive.
- The tech stack should include React and Typescript (this project was generated using `create-react-app`).
- The data should come from either OpenWeather or IBM (this project uses OpenWeather).

The application takes in a city value and returns the current weather forecast, if the value is valid. It will return an error if the city value is inaccurate or if there is an error.

## How to operate

- Run `npm install` to get the required packages.
- Run `npm start` to start the application and use.

## Areas for improvement

- The current application is managed in the `App.tsx` file. It can be split into separate components for the search, the weather display and a separate query that for returning the weather data.
- The current search only takes a city string. If there are cities with the same name, the query returns the first value found. The search could be expanded to also take in a country value, or let the user know that the query returned more than one value.
- Some of the static values (i.e. the API key and base URL values) can be extracted into their own `.env` file. This would make the values easier to maintain and more secure.
