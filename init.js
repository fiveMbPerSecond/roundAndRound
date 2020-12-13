var data1;
var data2;
var data;
function ajax(startLoc, endLoc, startTime) {
  var data;
  var httpRequest;
  loc(startLoc, endLoc)
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.open('GET', `ajax.php?lat1=${data1[0]}&lon1=${data1[1]}&lat2=${data2[0]}&lon2=${data2[1]}&startTime=datetime'${startTime}'&$format=json&$orderby=EndTime&subscription-key=3e65ceaade6c438c8abcebcd79766404`, async=false);
  httpRequest.send();
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      data = JSON.parse(httpRequest.responseText);
    } else {
      alert('There was a problem with the request.');
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

  httpRequest1.open('GET', `address.php?q=${startLoc}&format=json`,async=false);
  httpRequest1.send();
  httpRequest2.open('GET', `address.php?q=${endLoc}&format=json`,async=false);
  httpRequest2.send();
  if (httpRequest1.readyState === XMLHttpRequest.DONE) {
    if (httpRequest1.status === 200) {
      a = JSON.parse(httpRequest1.responseText);
      data1 = [a[0].lat, a[0].lon];
    } else {
      alert('There was a problem with the request.');
    }
  }
  if (httpRequest2.readyState === XMLHttpRequest.DONE) {
    if (httpRequest2.status === 200) {
      b = JSON.parse(httpRequest2.responseText);
      data2 = [b[0].lat, b[0].lon];
    } else {
      alert('There was a problem with the request.');
    }
  }
}
function waitForElement(){
  if(typeof data1 !== "undefined" || typeof data2 !== "undefined"){
      //variable exists, do what you want
  }
  else{
      setTimeout(waitForElement, 250);
  }
}