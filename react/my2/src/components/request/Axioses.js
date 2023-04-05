import axios from "axios";



// Flask 서버로 요청을 보낼 때 사용
export const toFlask = axios.create({
    baseURL: "http://localhost:8888"
});


// Spring-boot 서버로 요청을 보낼 때 사용
export const toSpring = axios.create({
    baseURL: "http://localhost:8080"
});