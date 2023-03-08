
const API_KEY = "24ace7dc9cdbf0f4a332537b47cc4b41";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = (infotype, searchParams) => {
    const url = new URL(BASE_URL + "/" + infotype);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});

    return fetch(url)
    .then((res) => res.json())
};

const formatCurrentWeather = (data) => {
   const {
    coord: {lat, lon},
    main: {temp, feels_like, temp_min, temp_max, humidity},
    name,
    dt,
    sys: {country, sunrise, sunset},
    weather,
    wind: {speed}
   } = data

  const {main: details, icon} = weather[0]

   return {lat, lon, temp, feels_like, temp_min, temp_max, humidity,
 name, dt, country, sunrise, sunset, details, icon, speed}
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        'weather', searchParams).then(formatCurrentWeather);

  return formattedCurrentWeather;
}

export default getFormattedWeatherData