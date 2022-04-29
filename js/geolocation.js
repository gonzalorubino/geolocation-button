var x = document.getElementById("coordinates");
var geobutton = document.getElementById("geobutton");
var mapa = document.getElementById('map')


geobutton.addEventListener('click', getLocation);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation no esta soportada en este browser.";
    }
}

function showPosition(position) {
    console.log('full data', position);

    x.innerHTML = `<p><strong>Latitude:</strong>${position.coords.latitude}<br />
        <strong>Longitude:</strong> ${position.coords.longitude}</p>`;
}