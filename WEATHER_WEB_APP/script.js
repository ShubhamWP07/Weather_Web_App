
// Creating data

let data;

// Creating variable to store the element

const input = document.getElementById("input");
const cityName = document.getElementById("cityName");
const countryName = document.getElementById("countryName");
const current_date = document.getElementById("current_date");
const current_temprature = document.getElementById("temprature");
const weather_condition = document.getElementById("weather_condition");
const weather_icon = document.getElementById("weather_icon");
const current_high_temp = document.getElementById("current_high");
const current_Wind_speed = document.getElementById("current_Wind");
const current_Sunrise = document.getElementById("current_Sunrise");
const current_Low_temp = document.getElementById("current_Low");
const current_Rain = document.getElementById("current_Rain");
const current_Sunset = document.getElementById("current_Sunset");

const week_days_monday = document.getElementById("week_days_monday")
const week_days_tuesday = document.getElementById("week_days_tuesday")
const week_days_wednesday = document.getElementById("week_days_wednesday")
const week_days_thursday = document.getElementById("week_days_thursday")
const week_days_friday = document.getElementById("week_days_friday")
const week_days_saturday = document.getElementById("week_days_saturday")
const week_days_sunday = document.getElementById("week_days_sunday")

const weather_icon_7days_monday = document.getElementById("weather_icon_7days_monday")
const weather_icon_7days_tuesday = document.getElementById("weather_icon_7days_tuesday")
const weather_icon_7days_wednesday = document.getElementById("weather_icon_7days_wednesday")
const weather_icon_7days_thursday = document.getElementById("weather_icon_7days_thursday")
const weather_icon_7days_friday = document.getElementById("weather_icon_7days_friday")
const weather_icon_7days_saturday = document.getElementById("weather_icon_7days_saturdayy")
const weather_icon_7days_sunday = document.getElementById("weather_icon_7days_sunday")

const weather_condition_7days_monday = document.getElementById("weather_condition_7days_monday")
const weather_condition_7days_tuesday = document.getElementById("weather_condition_7days_tuesday")
const weather_condition_7days_wednesday= document.getElementById("weather_condition_7days_wednesday")
const weather_condition_7days_thursday = document.getElementById("weather_condition_7days_thursday")
const weather_condition_7days_friday = document.getElementById("weather_condition_7days_friday")
const weather_condition_7days_saturday = document.getElementById("weather_condition_7days_saturday")
const weather_condition_7days_sunday = document.getElementById("weather_condition_7days_sunday")

const current_high_7days_monday = document.getElementById("current_high_7days_monday")
const current_high_7days_tuesday = document.getElementById("current_high_7days_tuesday")
const current_high_7days_wednesday = document.getElementById("current_high_7days_wednesday")
const current_high_7days_thursday = document.getElementById("current_high_7days_thursday")
const current_high_7days_friday = document.getElementById("current_high_7days_friday")
const current_high_7days_saturday = document.getElementById("current_high_7days_saturday")
const current_high_7days_sunday = document.getElementById("current_high_7days_sunday")

const current_low_7days_monday = document.getElementById("current_low_7days_monday")
const current_low_7days_tuesday = document.getElementById("current_low_7days_tuesday")
const current_low_7days_wednesday = document.getElementById("current_low_7days_wednesday")
const current_low_7days_thursday = document.getElementById("current_low_7days_thursday")
const current_low_7days_friday = document.getElementById("current_low_7days_friday")
const current_low_7days_saturday = document.getElementById("current_low_7days_saturday")
const current_low_7days_sunday = document.getElementById("current_low_7days_sunday")


// Creating Function to get the data from weather app

const getData = async (event)=> {
  event.preventDefault();

  if(!input.value){
    alert("Please enter your keywords")
  }

  const city = input.value;

  // Fetching data

  const fetchdata = await fetch(`https://api.weatherapi.com/v1/current.json?key=9f0482f2f2244c48809105956231102&q=${city}`);

  const weatherData = await fetchdata.json();
  data = weatherData;
  console.log(data);

  // Manipluating the varibe to get the data in HTML

  cityName.innerHTML = data.location.name;
  countryName.innerHTML = data.location.country;
  current_date.innerHTML = data.location.localtime;
  current_temprature.innerHTML = data.current.temp_c;
  weather_condition.innerHTML = data.current.condition.text;
  weather_icon.src = data.current.condition.icon;
  current_Wind_speed.innerHTML = data.current.wind_mph;


  const city2 = input.value;

  // Fetching data

  const fetchdata2 = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9f0482f2f2244c48809105956231102&q=${city2}&days=7`);

  const weatherData2 = await fetchdata2.json();
  data = weatherData2;
  console.log(data);

  current_high_temp.innerHTML = data.forecast.forecastday[0].day.maxtemp_c;
  current_Sunrise.innerHTML  = data.forecast.forecastday[1].astro.sunrise;
  current_Low_temp.innerHTML = data.forecast.forecastday[0].day.mintemp_c;
  current_Rain.innerHTML = data.current.cloud;
  current_Sunset.innerHTML = data.forecast.forecastday[1].astro.sunset;

  week_days_monday.innerHTML = data.forecast.forecastday[0].date;
  week_days_tuesday.innerHTML = data.forecast.forecastday[1].date;
  week_days_wednesday.innerHTML = data.forecast.forecastday[2].date;
  week_days_thursday.innerHTML = data.forecast.forecastday[3].date;
  week_days_friday.innerHTML = data.forecast.forecastday[4].date;
  week_days_saturday.innerHTML = data.forecast.forecastday[5].date;
  week_days_sunday.innerHTML = data.forecast.forecastday[6].date;

  weather_icon_7days_monday.src = data.forecast.forecastday[0].day.condition.icon;
  weather_icon_7days_tuesday.src = data.forecast.forecastday[1].day.condition.icon;
  weather_icon_7days_wednesday.src = data.forecast.forecastday[2].day.condition.icon;
  weather_icon_7days_thursday.src = data.forecast.forecastday[3].day.condition.icon;
  weather_icon_7days_friday.src = data.forecast.forecastday[4].day.condition.icon;
  // weather_icon_7days_saturday.src = data.forecast.forecastday[5].day.condition.icon;
  // weather_icon_7days_sunday.src = data.forecast.forecastday[6].day.condition.icon;

  weather_condition_7days_monday.innerHTML = data.forecast.forecastday[0].day.condition.text;
  weather_condition_7days_tuesday.innerHTML = data.forecast.forecastday[1].day.condition.text;
  weather_condition_7days_wednesday.innerHTML = data.forecast.forecastday[2].day.condition.text;
  weather_condition_7days_thursday.innerHTML = data.forecast.forecastday[3].day.condition.text;
  weather_condition_7days_friday.innerHTML = data.forecast.forecastday[4].day.condition.text;
  weather_condition_7days_saturday.innerHTML = data.forecast.forecastday[5].day.condition.text;
  weather_condition_7days_sunday.innerHTML = data.forecast.forecastday[6].day.condition.text;


  current_high_7days_monday.innerHTML = data.forecast.forecastday[0].day.maxtemp_c;
  current_high_7days_tuesday.innerHTML = data.forecast.forecastday[1].day.maxtemp_c;
  current_high_7days_wednesday.innerHTML = data.forecast.forecastday[2].day.maxtemp_c;
  current_high_7days_thursday.innerHTML = data.forecast.forecastday[3].day.maxtemp_c;
  current_high_7days_friday.innerHTML = data.forecast.forecastday[4].day.maxtemp_c;
  current_high_7days_saturday.innerHTML = data.forecast.forecastday[5].day.maxtemp_c;
  current_high_7days_sunday.innerHTML = data.forecast.forecastday[6].day.maxtemp_c;

  current_low_7days_monday.innerHTML = data.forecast.forecastday[0].day.mintemp_c;
  current_low_7days_tuesday.innerHTML = data.forecast.forecastday[1].day.mintemp_c;
  current_low_7days_wednesday.innerHTML = data.forecast.forecastday[2].day.mintemp_c;
  current_low_7days_thursday.innerHTML = data.forecast.forecastday[3].day.mintemp_c;
  current_low_7days_friday.innerHTML = data.forecast.forecastday[4].day.mintemp_c;
  current_low_7days_saturday.innerHTML = data.forecast.forecastday[5].day.mintemp_c;
  current_low_7days_sunday.innerHTML = data.forecast.forecastday[6].day.mintemp_c;
}