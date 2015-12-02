// // on startup run resizing event
// Meteor.startup(function() {
//   $(window).resize(function() {
//     $('#map').css('height', window.innerHeight - 82 - 45);
//   });
//   $(window).resize(); // trigger resize event 
// });
 
// // create marker collection
// var Markers = new Meteor.Collection('markers');

// Meteor.subscribe('markers');


// //Creates and displays maps
// Template.map.rendered = function() {
//   L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';

//   //Creates map variable and sets initial view to user's location
//   var map = L.map('map', {
//     doubleClickZoom: false
//   }).locate({setView: true, maxZoom: 16});

//   L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);

//   map.on('dblclick', function(event) {
//     Markers.insert({latlng: event.latlng});
//   });

//   var query = Markers.find();
//   query.observe({
//     added: function (document) {
//       var marker = L.marker(document.latlng).addTo(map)
//         .on('click', function(event) {
//           map.removeLayer(marker);
//           Markers.remove({_id: document._id});
//         });
//     },
//     removed: function (oldDocument) {
//       layers = map._layers;
//       var key, val;
//       for (key in layers) {
//         val = layers[key];
//         if (val._latlng) {
//           if (val._latlng.lat === oldDocument.latlng.lat && val._latlng.lng === oldDocument.latlng.lng) {
//             map.removeLayer(val);
//           }
//         }
//       }
//     }
//   });
// };