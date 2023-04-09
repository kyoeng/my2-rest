import requests
from bs4 import BeautifulSoup
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 


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
        imgs.append(str(imgBox[i].find('img')['src']))

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
    options = webdriver.ChromeOptions()
    options.add_experimental_option("excludeSwitches", ["enable-logging"])

    driver = webdriver.Chrome(executable_path="C:/Users/82109/AppData/Local/Programs/Python/Python310/chromedriver.exe", options=options)
    driver.get("https://map.kakao.com//")

    time.sleep(5)

    driver.find_element(By.ID, "search.keyword.query").send_keys(area + "가볼만한곳")
    driver.find_element(By.ID, "search.keyword.query").send_keys(Keys.RETURN)

    time.sleep(5)

    driver.close()

    # 카카오맵은 정상 작동함

    # url = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=" + area + "+가볼만한곳"
    # res = requests.get(url)
    # soup = BeautifulSoup(res.text, "lxml")
    
    # titleBox = soup.find_all('div', attrs={"class" : "CYFGv"})
    # navBox = soup.find_all('div', attrs={"class" : "vzxNd"})
    
    # titles = []     # 장소 이름, 테마들
    # navs = []       # 장소의 간략한 주소들

    # for i in range(len(titleBox)):
    #     t = []
    #     t.append(titleBox[i].find_all('span')[0].get_text())
    #     t.append(titleBox[i].find_all('span')[1].get_text())
        
    #     titles.append(t)
    #     navs.append(navBox[i].find('em').get_text())


    # return {
    #     "titles" : titles,
    #     "navs" : navs
    # }


# 지역 주소 찾아오기
def findPost(area):
    url = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=" + area
    res = requests.get(url)
    soup = BeautifulSoup(res.text, "lxml")

    return soup.find('span', attrs={"class" : "LDgIH"}).get_text()


# scrapArea("강릉")