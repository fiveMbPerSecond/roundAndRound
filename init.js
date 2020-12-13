function ajax() {
    var httpRequest;
    document.getElementById("ajaxButton").addEventListener('click', makeRequest);
  
    function makeRequest() {
      httpRequest = new XMLHttpRequest();
  
      if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
      }
      httpRequest.onreadystatechange = alertContents;
      httpRequest.open('GET', 'ajax.php');
      httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      httpRequest.send("lat1=29.7520116285855&lon1=-95.3713343539019&lat2=29.7548465554328&lon2=-95.3357880398602&startTime=datetime'2012-09-12T20:00:00Z'&$format=json&$orderby=EndTime&subscription-key=3e65ceaade6c438c8abcebcd79766404");
    }
  
    function alertContents() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          alert(httpRequest.responseText);
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
  }