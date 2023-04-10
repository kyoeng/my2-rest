import requests, json
from geopy.geocoders import Nominatim


def getLatLng(address):
    url = "https://dapi.kakao.com/v2/local/search/address.json?query=" + address

    try:
        headers = {
            "Authorization" : "KakaoAK e3be9561e126a957a7ffeb0ce9c74863"
        }

        api_json = json.loads(str(requests.get(url, headers=headers).text))
        addr = api_json['documents'][0]['address']

        crd = {
            "lat" : str(addr['y']),
            "lng" : str(addr['x'])
        }

        return crd
    except Exception:
        print(address)
        return False



def test(address):
    geolocoder = Nominatim(user_agent="South Korea", timeout=None)
    geo = geolocoder.geocode(address)
    crd = {
        "lat" : str(geo.latitude),
        "lng" : str(geo.longitude)
    }

    print(crd)

    return crd