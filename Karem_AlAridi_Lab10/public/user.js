const weatherOption = document.getElementById("weatherOptionSelector");
const weatherInfoTable = document.getElementById("weatherInfoTable");

const clearTable = () => {
    for (var i = 1; i < weatherInfoTable.rows.length; i++) {
        weatherInfoTable.deleteRow(i);
    }
};


weatherOption.onchange = () => {
    const myLocation = document.getElementById("myLocation");
    const chooseCity = document.getElementById("chooseCity");

    clearTable();

    if (weatherOption.selectedIndex == 0) {
        myLocation.style.display = "block";
        chooseCity.style.display = "none";
    } else {
        myLocation.style.display = "none";
        chooseCity.style.display = "block";
    }
};


const myLocation = () => {
    clearTable();
    navigator.geolocation.getCurrentPosition(weatherReq);
};

const chosenCity = () => {
    const city = document.getElementById("city").value;
    weatherReq(null, city);
};

const weatherReq = (position, city) => {
    clearTable();
    const xhttp = new XMLHttpRequest();
    var baseURL = "http://api.openweathermap.org/data/2.5/weather?appid=278407d180b467b9339e8e69f340b61f&units=metric";
    

    if (city) {
        baseURL += `&q=${city}`;
    }
    else {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        baseURL += `&lat=${lat}&lon=${long}`;
    }

    xhttp.open("GET", baseURL);
    xhttp.send();
    xhttp.onload = () => {
        const response = JSON.parse(xhttp.responseText);
        const temp = response.main.temp;
        const pressure = response.main.pressure;
        const row = weatherInfoTable.insertRow(1);;
        row.innerHTML = `<td>${response.name}</td> <td>${temp}</td> <td>${pressure}</td>`;
    }
}