function initMap (){
  alert(' JS Testing');
  var newMap = document.getElementById('beyond');
  var mapOptions= {
    center: {lat: 41.948335, lng: -87.655279},
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      posistion: google.maps.ControlPosistion.BOTTOM_CENTER
    }
  };
  
  var theMap = new google.maps.Map(newMap, mapOptions);
}
google.maps.event.addDomListener(window, 'load', initMap);