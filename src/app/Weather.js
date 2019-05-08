export class Weather{

    constructor(city,countryCode){
        this.apikey='66dddaa32d85a88f2d1cc000b9447d46';
        this.city=city;
        this.countryCode=countryCode;
    }

    async getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }
    changeLocation(city,countryCode){
        this.countryCode=countryCode;
        this.city=city;
    }

}