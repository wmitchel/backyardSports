randomNum = function randomNum(from, to, fixed) {
	return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
	// .toFixed() returns string, so ' * 1' is a trick to convert to number
};

// distanceSort = function distanceSort(latlng, coords) {

// 	var coordsArray = [];

// 	for(var coord in coords) {
// 		let tempCoord = {latitude: coords[coord].latitude, longitude: coords[coord].longitude};
// 		var dist = geolib.getDistance(latlng, tempCoord);
// 		coordsArray.push({
// 			key: coord,
// 			latitude: tempCoord.latitude,
// 			longitude: tempCoord.longitude,
// 			distance: dist
// 		});
// 	}
// 	return coordsArray.sort(function(a, b) { return a.distance - b.distance; });
// };