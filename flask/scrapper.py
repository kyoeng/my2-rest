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


# 지역 정보 스크래핑 ==========
def scrapArea(area):
    options = webdriver.ChromeOptions()
    options.add_experimental_option("excludeSwitches", ["enable-logging"])
    options.add_argument("headless")

    driver = webdriver.Chrome(executable_path="C:/Users/82109/AppData/Local/Programs/Python/Python310/chromedriver.exe", options=options)
    driver.get("https://map.kakao.com/")

    try:
        # 검색창에 대한 element 찾기 ( 찾으면 다음 코드로 )
        WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, "search.keyword.query"))
        )

        # 검색창에 검색할 키워드 입력 후 검색
        driver.find_element(By.ID, "search.keyword.query").send_keys(area + "가볼만한곳" + Keys.RETURN)

        time.sleep(2)

        # 장소명, 주소 가져오기
        titles = []     # 장소명 저장
        addrs = []      # 주소 저장

        recomTitles = driver.find_elements(By.CLASS_NAME, "link_name")
        recomAddrs = driver.find_elements(By.CSS_SELECTOR, "#info\.search\.place\.list > li > div.info_item > div.addr > p:nth-child(1)")

        for i in range(len(recomTitles)):
            titles.append(recomTitles[i].text)
            addrs.append(recomAddrs[i].text)

        return {
            "titles" : titles,
            "addrs" : addrs
        }
    except TimeoutError:
        print("time error")
        return 500
    finally:
        driver.close()