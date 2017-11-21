const mapboxgl = require("mapbox-gl");
const marker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1IjoiYWJlbHNqNjAiLCJhIjoiY2phOXV0eGFlMGJnZDMxcXR0djJiNWM4dyJ9.1Ze8XxqUEuqI0fEKnSnrdA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

marker('hotel', [-74.009151, 40.705086]).addTo(map);
marker('restaurant', [-73.9742, 40.7565]).addTo(map);
marker('activity', [-73.9832, 40.7536]).addTo(map);


// Ours
// new mapboxgl.Marker(document.getElementById('marker')).setLngLat([-74.009151, 40.705086]).addTo(map);

// Theirs
// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
