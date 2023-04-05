from flask import Flask                 # 서버 구현을 위한 Flask 객체 import
from flask_restx import Api, Resource   # Api 구현을 위한 Api 객체 import
from flask_cors import CORS             # CORS를 위한 객체 import

import randomArea
import scrapper
from datetime import datetime

app = Flask(__name__)       # Flask 객체 선언, 파라미터로 어플리케이션 패키지의 이름을 넣어줌
api = Api(app)              # Api 객체에 Flask 객체 등록

# CORS 허용 url 등록
CORS(app)


@api.route('/main')
class Main(Resource):
    def get(self):
        now = datetime.today().month

        # 현재 날짜의 달 축제정보 가져오기
        party = scrapper.scrapParty(str(now))

        # 추천 지역 랜덤으로 가져오기
        test = randomArea.selectCity()

        return {
            "party" : party
        }
    

    def post(self):
        return
    

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8888)