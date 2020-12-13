var mymap = L.map('map').setView([39.8283, -98.5795], 4);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 3,
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
// var polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap);
// zoom the map to the polyline
// mymap.fitBounds(polyline.getBounds());
function waitForData() {
    if(typeof data !== "undefined"){
        //variable exists, do what you want
    }
    else{
        setTimeout(waitForElement, 250);
    }
}
var s, e, stime;
function calcRoute() {
    s = document.getElementById("startLoc").value;
    e = document.getElementById("endLoc").value;
    stime = document.getElementById("startTime").value;
    if(s === '' || e === '' || stime === '')
        alert("Empty field.");
    date = new Date(stime);
    if (isNaN(date))
        alert("Invalid Date: must have day, month, and year");
    ajax(s,e,date.toISOString());
    waitForData();
    date = new Date(data["value"][0].EndTime);
    document.getElementById("output").value = date.toString();

}

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
  
//   var request = testdat();
//   request.open("GET", "https://hacktj2020api.eastbanctech.com/transitiq/CalculateItineraryByPoints?lat1=29.7520116285855&lon1=-95.3713343539019&lat2=29.7548465554328&lon2=-95.3357880398602&startTime=datetime%272012-09-12T20:00:00Z%27&$format=json&$orderby=EndTime&subscription-key=3e65ceaade6c438c8abcebcd79766404", true);
//   request.send(null);
//   request.onreadystatechange = function() {
//     if (request.readyState == 4)
//       alert(request.responseText);
//   };
