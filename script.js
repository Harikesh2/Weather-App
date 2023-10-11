const inputbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('Search_Button');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const Wind = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location_not_found');
const weather_body = document.querySelector('.weather-body'); 


// function to check the city name and the api of openweather
async function checkweather(city){
    const api_key = "5acbff9cf1cee4a500550c04d345fccc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());



// if the user enter the wrong city name
    if (weather_data.cod == `404`){
        location_not_found.style.display = 'flex';
        weather_body.style.display = "none";
        console.log("error");
        return;
       }



// the normal case where the user entered the right city name
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";


    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273)} °C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    
    Wind.innerHTML = `${weather_data.wind.speed} km/H`;
  
        switch (weather_data.weather[0].main){
            case 'Clouds':
                weather_img.src = "/assets/cloud.png";
                break;
                case 'Clear':
                weather_img.src = "/assets/clear.png";
                break;
                case 'Rain':
                weather_img.src = "/assets/rain.png";
                break;
                case 'Mist':
                    weather_img.src = "/assets/mist.png";
                break;
                case 'Snow':
                    weather_img.src = "/assets/snow.png";
                break;
        }
        console.log(weather_data);
    
}

searchbtn.addEventListener('click', ()=>{
    checkweather(inputbox.value);
});