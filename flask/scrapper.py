import requests
from bs4 import BeautifulSoup


# 해당 달의 축제정보 스크래핑 ==========
def scrapParty(month):
    url = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=" + month + "월" + "+축제"
    res = requests.get(url)
    soup = BeautifulSoup(res.text, "lxml")

    nameBox = soup.find_all('strong', attrs={"class" : "this_text"})
    imgBox = soup.find_all('div', attrs={"class" : "data_area"})
    infoBox = soup.find_all('dl', attrs={"class" : "rel_info"})

    names = []  # 축제 이름들을 담을 배열
    imgs = []   # 축제 이미지 정보를 담을 배열
    infos = []  # 축제 정보들을 담을 배열

    # 축제 이름, 이미지 정보 찾아서 담기
    for i in range(len(nameBox)):
        names.append(nameBox[i].find('a').get_text())
        imgs.append(str(imgBox[i].find('img')))

    # 축제 정보 찾아서 담기
    for f in infoBox:
        infos.append(str(f.find_all('dd')))

    # 객체 형태로 리턴
    return {
        "names" : names,
        "imgs" : imgs,
        "infos" : infos
    }


# 추천 지역 정보 스크래핑 ==========
def scrapArea(area):
    url = "https://map.naver.com/v5/search/" + area + "%20가볼만한곳?c=10,0,0,0,dh"
    res = requests.get(url)
    soup = BeautifulSoup(res.text, "lxml")



print(scrapParty("4"))