require ('./index.css');
const { Weather } = require ('./Weather');
const { UI } = require ('./ui');
const {Store}=require('./store');
const ui = new UI();
const store = new Store();
const {city, countryCode} = store.getLocationData();
const weather = new Weather(city,countryCode);


async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('country-code').value;
    console.log(city,countryCode);
    weather.changeLocation(city,countryCode);
    store.setLocationData(city, countryCode);
    fetchWeather();
    e.preventDefault();
});


document.addEventListener('DOMContentLoaded',fetchWeather);