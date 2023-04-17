import { Cookies } from "react-cookie";


const cookie = new Cookies();

// 쿠키 저장
export const setCookie = (name, value) => {
    return cookie.set(name, value);
}

// 쿠키 데이터 가져오기
export const getCookie = (name) => {
    return cookie.get(name);
}

// 쿠키 삭제
export const removeCookie = (name) => {
    return cookie.remove(name);
}