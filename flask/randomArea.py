import random


city = [
    "군산", "당진", "인천", "청주", "가평", "속초", "제주",
    "서울", "경주", "부산", "여수"
]


def selectCity():
    selected = random.choice(city)

    return selected