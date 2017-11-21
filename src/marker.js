const mapboxgl = require("mapbox-gl");

function buildMarker(place, coords) {
  place.toLowerCase();
  var backgroundImg;
  if (place === 'hotel') {
    backgroundImg = 'url(http://i.imgur.com/D9574Cu.png)';
  } else if (place === 'restaurant') {
    backgroundImg = 'url(http://i.imgur.com/cqR6pUI.png)';
  } else if (place === 'activity') {
    backgroundImg = 'url(http://i.imgur.com/WbMOfMl.png)';
  }

  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = backgroundImg;
  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
}

module.exports = buildMarker;
