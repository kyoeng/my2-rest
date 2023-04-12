from flask import Flask                 # 서버 구현을 위한 Flask 객체 import
from flask_restx import Api, Resource   # Api 구현을 위한 Api 객체 import
from flask_cors import CORS             # CORS를 위한 객체 import

import randomArea
import scrapper
from datetime import datetime

import geo

app = Flask(__name__)       # Flask 객체 선언, 파라미터로 어플리케이션 패키지의 이름을 넣어줌
api = Api(app)              # Api 객체에 Flask 객체 등록

# CORS 허용 url 등록
CORS(app)


@api.route('/party')
class Party(Resource):
    def get(self):
        # 현재 날짜의 달 축제정보 가져오기
        now = datetime.today().month
        party = scrapper.scrapParty(str(now))

        return {
            "party" : party
        }

    def post(self):
        return
    


@api.route('/recommend')
class Recommend(Resource):
    def get(self):
        # 추천 지역 랜덤으로 가져오기
        rand = randomArea.selectCity()

        # 추천 지역의 중심 좌표 가져오기
        randLatLng = geo.getLatLng(rand)

        # 추천 지역의 추천 여행지 가져오기
        recom = scrapper.scrapArea(rand)

        # 추천 지역 좌표 구하기
        if recom == 500:
            return 500
        else:
            latlng = []

            for r in recom['addrs']:
                latlng.append(geo.getLatLng(r))

            return {
                "rand" : rand,
                "randLatLng" : randLatLng,
                "recom" : recom,
                "latlng" : latlng
            }



if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8888)