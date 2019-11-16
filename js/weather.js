window.addEventListener('load', ()=> {
    let long;
    let lat;

    let weatherDescription = document.querySelector('#weatherDescription');
    let weatherTemperature = document.querySelector('#temperature');
    let weatherLocation = document.querySelector('#location');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/5f14c50027b67aa45faf53b63217f57f/${lat},${long}`;

            fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data =>{
                    console.log(data);
                    const {temperature, summary} = data.currently;

                    weatherDescription.textContent = summary;
                    weatherTemperature.textContent = Math.round(FarenheitToCelsius(temperature)) + "°C";

                    weatherLocation.textContent = simplifyLocation(data.timezone);

                });
        });
    }

    function FarenheitToCelsius(F){
        return (F - 32)*(5/9.0);
    }

    function simplifyLocation(timezone){
            timezone.toString();
            let array = timezone.split("/");
            console.log(array);
            return array[1];

    }
});