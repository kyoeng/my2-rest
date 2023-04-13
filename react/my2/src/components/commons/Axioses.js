import axios from "axios";



// Flask 서버로 요청을 보낼 때 사용
export const toFlask = axios.create({
    baseURL: "http://192.168.25.54:8888"
});


// Spring-boot 서버로 요청을 보낼 때 사용
export const toSpringBoot = axios.create({
    baseURL: "http://192.168.25.54:8080"
});