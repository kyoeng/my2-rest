import axios from "axios";
import { getCookie } from "./Cookie";



// Flask 서버로 요청을 보낼 때 사용
export const toFlask = axios.create({
    baseURL: "http://192.168.25.54:8888"
});


// Spring-boot 서버로 요청을 보낼 때 사용
export const toSpringBoot = axios.create({
    baseURL: "http://192.168.25.54:8080"
});


// 토큰 체크용 요청
export const forTokenCheckReq = axios.create({
    baseURL: "http://192.168.25.54:8080/check",
    method: "get",
    headers: {
        Authorization: `Bearer ${getCookie("token")}`
    }
})


// 토큰이 필요한 요청을 보낼 때 사용
export const toSpringWithToken = axios.create({
    baseURL: "http://192.168.25.54:8080/auth",
    headers: {
        Authorization: `Bearer ${getCookie("token")}`
    }
});