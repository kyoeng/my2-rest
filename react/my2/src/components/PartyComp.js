import "./styles/Loader.css";
import { toFlask } from '../components/commons/Axioses';
import { useState, useLayoutEffect } from "react";
import * as Pt from "./styles/PartyCompStyle";


export default function PartyComp() {
    // 축제에 대한 컨텐츠가 담길 변수
    const [partyView, setPartyView1] = useState(<div className="loader"></div>);

    // Flask와 통신 후 view 처리 ( 축제 컨텐츠 부분 )
    useLayoutEffect(() => {
        toFlask({
            url: "/party",
            method: "get"
        }).then((res) => {
            if (res.status === 200) {
                console.log(res.data.party);
                const party = [];

                for (let i = 0; i < res.data.party.names.length; i++) {
                    party.push(
                        <Pt.PartyContentValue key={`party_${i}`}>
                            <Pt.PartyContentData>
                                <Pt.PartyTitle>
                                    {res.data.party.names[i]}
                                </Pt.PartyTitle>

                                <Pt.PartyInfoBox>
                                    <Pt.PartyInfoName>
                                        기간
                                    </Pt.PartyInfoName>

                                    <Pt.PartyInfoValue>
                                        {res.data.party.infos[i].split(", ")[0].slice(5).slice(0, -5)}
                                    </Pt.PartyInfoValue>
                                </Pt.PartyInfoBox>

                                <Pt.PartyInfoBox>
                                    <Pt.PartyInfoName>
                                        장소
                                    </Pt.PartyInfoName>

                                    <Pt.PartyInfoValue>
                                        {res.data.party.infos[i].split(", ")[1].slice(4).slice(0, -6)}
                                    </Pt.PartyInfoValue>
                                </Pt.PartyInfoBox>
                            </Pt.PartyContentData>

                            <Pt.PartyContentImg src={res.data.party.imgs[i]} />

                            <Pt.PartyLink href={`https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=${res.data.party.names[i]}`} target="_blank" />
                        </Pt.PartyContentValue>
                    )
                }

                setPartyView1(party);
            } else {
                console.log(res.data);
                console.log(res.status);
            }
        }).catch((err) => {
            console.log(err);
        })
    }, []);


    return (
        <Pt.PartyContainer>
            <Pt.PartyTitleBox>
                <Pt.PartyTitleLine />
                <Pt.PartyTitleText>이 달의 인기 축제들</Pt.PartyTitleText>
            </Pt.PartyTitleBox>

            <Pt.PartyContentBox>
                {partyView}
            </Pt.PartyContentBox>
        </Pt.PartyContainer>
    );

}