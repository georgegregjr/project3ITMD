function initMap (){
  var newMap = document.getElementById('beyond');
  var mapOptions= {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  var theMap = new google.maps.Map(newMap, mapOptions);
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const marker = new AdvancedMarkerElement({
    newMap,
    position: { lat: -34.397, lng: 150.644 },
  });

}
initMap();
/*
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("beyond"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
*/