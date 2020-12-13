var mymap = L.map('map').setView([29.749907, -95.358421], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidHJlbnQ3MiIsImEiOiJja2ltZnpsM24wc3ZzMnVvMWZrYndyYzVyIn0.Z_9nNCD8DQsfWHMhnnvv7A'
}).addTo(mymap);
// create a red polyline from an array of LatLng points
var latlngs = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap);
// zoom the map to the polyline
mymap.fitBounds(polyline.getBounds());

function calcRoute() {
    var sx = document.getElementById("startLat").value;
    var sy = document.getElementById("startLon").value;
    var ex = document.getElementById("endLat").value;
    var ey = document.getElementById("endLon").value;
    var stime = document.getElementById("startTime").value;
    console.log(sx)
    console.log(sy)
    console.log(ex)
    console.log(ey)
    console.log(stime)
  }

<<<<<<< HEAD
 $(function testdat() {
    var params = {
        // Request parameters
        "lat1": "29.7520116285855",
        "lon1": "-95.3713343539019",
        "lat2": "29.7548465554328",
        "lon2": "-95.3357880398602",
        "startTime": "2020-12-13T00:00Z",
        "$format": "json",
        "$orderby": "AdjustedEndTime",
        "subscription-key": "3e65ceaade6c438c8abcebcd79766404"
    };
=======
//   $(function testdat() {
//     var params = {
//         // Request parameters
//         "lat1": "29.7520116285855",
//         "lon1": "-95.3713343539019",
//         "lat2": "29.7548465554328",
//         "lon2": "-95.3357880398602",
//         "startTime": "2020-12-13T00:00Z",
//         "$format": "json",
//         "$orderby": "AdjustedEndTime",
//     };
>>>>>>> f28d607210d9be251ff7b116ed4d6ba5ff33b5fd
  
//     $.ajax({
//         url: "https://hacktj2020api.eastbanctech.com/transitiq/CalculateItineraryByPoints?" + $.param(params),
//         beforeSend: function(xhrObj){
//             // Request headers
//             xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","3e65ceaade6c438c8abcebcd79766404");
//         },
//         type: "GET",
//         // Request body
//         data: "{body}",
//     })
//     .done(function(data) {
//         alert("success");
//     })
//     .fail(function() {
//         console.log(data);
//         alert("error");
//     });
// });

function testdat() {
    try {return new XMLHttpRequest();}
    catch (error) {}
    try {return new ActiveXObject("Msxml2.XMLHTTP");}
    catch (error) {}
    try {return new ActiveXObject("Microsoft.XMLHTTP");}
    catch (error) {}
  
    throw new Error("Could not create HTTP request object.");
  }
  
  var request = testdat();
  request.open("GET", "https://hacktj2020api.eastbanctech.com/transitiq/CalculateItineraryByPoints?lat1=29.7520116285855&lon1=-95.3713343539019&lat2=29.7548465554328&lon2=-95.3357880398602&startTime=datetime%272012-09-12T20:00:00Z%27&$format=json&$orderby=EndTime&subscription-key=3e65ceaade6c438c8abcebcd79766404", true);
  request.send(null);
  request.onreadystatechange = function() {
    if (request.readyState == 4)
      alert(request.responseText);
  };