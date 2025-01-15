import { writable } from "svelte/store";

export const weatherData = writable({
  city: "",
  forecast: [],
});

export const fetchWeatherData = async (city) => {
  const simulatedData = {
    city,
    forecast: [
      {
        date: "2024-12-11",
        temperature: { current: 20, min: 10, max: 30 },
        humidity: 60,
        weather: "snow",
      },
      {
        date: "2024-12-12",
        temperature: { current: 10, min: 20, max: 30 },
        humidity: 70,
        weather: "lightRain",
      },
      {
        date: "2024-12-13",
        temperature: { current: 20, min: 10, max: 30 },
        humidity: 40,
        weather: "drizzle",
      },
      {
        date: "2024-12-14",
        temperature: { current: 10, min: 0, max: 40 },
        humidity: 20,
        weather: "clearSky",
      },
      {
        date: "2024-12-15",
        temperature: { current: 15, min: 2, max: 20 },
        humidity: 20,
        weather: "fog",
      },
    ],
  };
  weatherData.set(simulatedData);
};
