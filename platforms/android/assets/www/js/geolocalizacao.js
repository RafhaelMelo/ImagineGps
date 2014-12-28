// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//

// PhoneGap
function getLocation() {
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(position) {
	/*
	$('#geolocation').html('Latitude: '        + position.coords.latitude              + '<br />' +
						'Longitude: '          + position.coords.longitude             + '<br />' +
						'Altitude: '           + position.coords.altitude              + '<br />' +
						'Accuracy: '           + position.coords.accuracy              + '<br />' +
						'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
						'Heading: '            + position.coords.heading               + '<br />' +
						'Speed: '              + position.coords.speed                 + '<br />' +
						'Timestamp: '          + position.timestamp          + '<br />');
	*/
	var latitude =position.coords.latitude;
	var longitude =position.coords.longitude;
	document.getElementById('lat').innerHTML = latitude;
	document.getElementById('log').innerHTML = longitude;
	

}

// onError Callback receives a PositionError object
//
function onError(error) {
    var element = document.getElementById('geolocation');
	element.innerHTML = 'code: '    + error.code    + '\n' +
			'message: ' + error.message + '\n';
}