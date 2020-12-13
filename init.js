var data1;
var data2;
function ajax(startLoc, endLoc, startTime) {
  var data;
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);
  loc(startloc, endloc)
  function makeRequest() {
    httpRequest = new XMLHttpRequest();
    httpRequest2 = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', `ajax.php?lat1=${data1[0]}lon1=${data1[1]}&lat2=${data2[0]}&lon2=${data2[1]}&startTime=datetime'2012-09-12T20:00:00Z'&$format=json&$orderby=EndTime&subscription-key=3e65ceaade6c438c8abcebcd79766404`);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send();
  }
  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        data = JSON.parse(httpRequest.responseText);
        console.log(data)
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
}
function loc(startLoc, endLoc) {
  var httpRequest1 = new XMLHttpRequest();
  var httpRequest2 = new XMLHttpRequest();

  if (!httpRequest1) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  if (!httpRequest2) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }

  httpRequest1.onreadystatechange = savelocation1;
  httpRequest1.open('GET', `nominatim.php?q=${startloc}`);
  httpRequest1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequest1.send();
  httpRequest2.onreadystatechange = savelocation2;
  httpRequest2.open('GET', `nominatim.php?${endtloc}`);
  httpRequest2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequest2.send();
  function savelocation1() {
    if (httpRequest1.readyState === XMLHttpRequest.DONE) {
      if (httpRequest1.status === 200) {
        a = JSON.parse(httpRequest1.responseText);
        data1 = [a[0].lat, a[0].lon];
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
  function savelocation2() {
    if (httpRequest2.readyState === XMLHttpRequest.DONE) {
      if (httpRequest2.status === 200) {
        b = JSON.parse(httpRequest2.responseText);
        data2 = [b[0].lat, b[0].lon];
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
}