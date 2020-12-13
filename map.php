<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>Round & Round - Map</title>
    <link rel = "icon" href = "icon.png" type = "image/x-icon"> 
</head>

<body>
        <div id='nav-bar'>
            <input type="text" id="startLat" value="" placeholder="startLat">
            <input type="text" id="startLon" value="" placeholder="startLon">
            <input type="text" id="endLat" value="" placeholder="endLat">
            <input type="text" id="endLon" value="" placeholder="endLon">
            <input type="text" id="startTime" value="" placeholder="hour:minute">
            <button onclick="testdat()">Calc</button>
            <button id="ajaxButton" type="button">Make a request</button>
        </div>
        <div id="map"></div>
</body>
<script src="map.js"></script>
</html>