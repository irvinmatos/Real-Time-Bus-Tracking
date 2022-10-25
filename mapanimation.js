// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops1 = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
  ];
  
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoiaXJ2aW5tYXRvcyIsImEiOiJjbDd6bDNiM2QwazQ4M29uMzFpdzliNHlqIn0.sZY0O8_isM80NUnJddMP1A';
  
  // This is the map instance
  
  const hours = new Date().getHours()
  const isDayTime = hours > 6 && hours < 19;
  if(isDayTime === true){
       let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-71.093729, 42.359244],
        zoom: 13,
        });
  } else {
        let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9',
        center: [-71.093729, 42.359244],
        zoom: 13,
        });
  
  }
  
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  
  var marker = new mapboxgl.Marker()
      .setLngLat([-71.093729, 42.359244])
      .addTo(map);
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    setTimeout(() =>{
      if (counter >= busStops1.length) return;
      marker.setLngLat(busStops1[counter]);
      counter++;
      move();
  
    }, 1000);
    
  }
  
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  