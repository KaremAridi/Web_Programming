var x = document.getElementById("loc");

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 5,
  });
  const marker = new google.maps.Marker({
    position: { lat: -34.397, lng: 150.644 },
    map: map,
  });
}
function setMark() {
  let lat = document.getElementById("latitude");
  let lon = document.getElementById("longtitude");
  let a = lat.value;
  let b = lon.value;
 
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: parseFloat(a), lng: parseFloat(b) },
    zoom: 5,
  });
  const marker = new google.maps.Marker({
    position: { lat: parseFloat(a), lng: parseFloat(b) },
    map: map,
  });
}
