########### Python 3.2 #############
import http.client, urllib.request, urllib.parse, urllib.error, base64, urllib
headers = {
    # Request headers
    'Ocp-Apim-Subscription-Key': 'dd7576412024481e88a51e02c3803147',
}
params = urllib.parse.urlencode({
    # Request parameters
    # '$format': '{String}',
    # '$filter': '{String}',
    # '$select': '{String}',
    # '$top': '{string}',
    # '$skip': '{string}',
    # '$orderby': '{String}',
})
try:
    conn = http.client.HTTPSConnection('hacktj2020api.eastbanctech.com')
    conn.request("GET", "/transitiq/Routes('RiOn432_2565_5589')/Stops?%s" % params, "{body}", headers)
    response = conn.getresponse()
    data = response.read()
    print(data)
    conn.close()
except Exception as e:
    print("[Errno {0}] {1}".format(e.errno, e.strerror))
####################################