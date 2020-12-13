// This sample uses the Apache HTTP client from HTTP Components (http://hc.apache.org/httpcomponents-client-ga/)
require_once 'HTTP/Request2.php';

$request = new Http_Request2('https://hacktj2020api.eastbanctech.com/transitiq/CalculateItineraryArrivingAt');
$url = $request->getUrl();

$headers = array(
    // Request headers
    'Ocp-Apim-Subscription-Key' => '3e65ceaade6c438c8abcebcd79766404',
);

$request->setHeader($headers);

$parameters = array(
    // Request parameters
    'lat1' => $_POST['lat1'],
    'lon1' => $_POST['lon1'],
    'lat2' => $_POST['lat2'],
    'lon2' => $_POST['lon1'],
    'startTime' => $_POST['startTime'],
    '$format' => $_POST['$format'],
    '$orderby'=> $_POST['$orderby'],
);

$url->setQueryVariables($parameters);

$request->setMethod(HTTP_Request2::METHOD_GET);

// Request body
$request->setBody("{body}");

try
{
    $response = $request->send();
    echo $response->getBody();
}
catch (HttpException $ex)
{
    echo $ex;
}

