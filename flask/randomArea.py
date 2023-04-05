import random


area = [0, 1, 2, 3, 4, 5]
city = [
    ["안성", "가평", "청평", "평택"],
    ["강릉", "속초", "동해", "고성"],
    ["청주", "충주", "제천", "당진"],
    ["목포", "여수", "군산", "남원"],
    ["포항", "경주", "문경", "통영"],
    ["서울", "인천", "대전", "대구", "부산", "제주", "전주"]
]


def selectCity():
    selectArea = random.choice(area)
    selected = random.choice(city[selectArea])

    return selected
