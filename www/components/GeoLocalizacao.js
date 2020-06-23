// This is a JavaScript file
function giveLocal(){
  var onSuccess = function(position) {
    alert('Latitude: ' + position.coords.latitude + '\n' +
          'Longitude: ' + position.coords.longitude + '\n' );

    L.mapquest.key = '5B2EfZ1rQuuujKQ5Lo0Aq2DPGBOBZ0Vn';

    var map = L.mapquest.map('map', {
      center: [position.coords.latitude, position.coords.longitude],
      layers: L.mapquest.tileLayer('dark'),
      zoom: 15
    });

    L.marker([position.coords.latitude, position.coords.longitude], {
      icon: L.mapquest.icons.marker(),
      draggable: false
    }).bindPopup('Denver, CO').addTo(map);

  map.addControl(L.mapquest.control());
  };

  function onError(error) {
    alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
  }

  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
