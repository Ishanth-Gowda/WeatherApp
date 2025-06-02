let containerdiv = document.querySelector('.container');
let form = document.querySelector('form');
let input = document.querySelector('input');
let temp = document.querySelector('.temperature');
let locate = document.querySelector('.time_location p');
let timedate = document.querySelector('.time_location span');
let conditions = document.querySelector('.condition span');
let conditionimg = document.querySelector('.condition img');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let val = input.value;
    let apiurl = 'http://api.weatherapi.com/v1/current.json?key=57b606615f4c45999fc111628250105&q=' + val + '&aqi=no';
    // call API now:
    fetch(apiurl)
        // API response to be succesful:
        .then(response => {
            if (!response.ok) {
                throw new Error("Something went wrong");
            } else {
                return response.json();
            }
        })
        // API data to be read:
        .then(data => {
            console.log(data);
            temp.innerText = data.current.temp_c + "°C";
            locate.innerText = data.location.name;
            timedate.innerText = data.location.localtime;
            conditions.innerText = data.current.condition.text;
            let imagesrc = data.current.condition.icon;
            conditionimg.src = "https:" + imagesrc;
        })
        // catch the error:
        .catch(error => {
            window.alert("Please type the correct name");
            console.error('Error:', error);
        })
})