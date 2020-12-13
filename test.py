########### Python 3.2 #############
import http.client, urllib.request, urllib.parse, urllib.error, base64, urllib
headers = {
    # Request headers
    'Ocp-Apim-Subscription-Key': 'dd7576412024481e88a51e02c3803147',
}
params = urllib.parse.urlencode({
    'lat1': '29.728379',
    'lon1': '-95.349847',
    'lat2': '29.738815',
    'lon2': '-95.346083',
    # # '$format': '{String}',
    # # '$orderby': '{String}',
    # 'endTime': "datetime'2020-12-13T7:00:00Z'",
})
try:
    conn = http.client.HTTPSConnection('hacktj2020api.eastbanctech.com')
    conn.request("GET", "CalculateItineraryByPoints?%s" % params, "{body}", headers)
    response = conn.getresponse()
    data = response.read()
    print(data)
    conn.close()
except Exception as e:
    print("[Errno {0}] {1}".format(e.errno, e.strerror))
####################################