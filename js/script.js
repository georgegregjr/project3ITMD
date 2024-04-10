/*function initMap (){
  alert(' JS Testing');
  var newMap = document.getElementById('beyond');
  var mapOptions= {
    center: {lat: 41.948335, lng: -87.655279},
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  var theMap = new google.maps.Map(newMap, mapOptions);
}
google.maps.event.addDomListener(window, 'load', initMap);
*/
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("beyond"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();