import requests, json



def test(address):
    url = "https://dapi.kakao.com/v2/local/search/address.json?query=" + address

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