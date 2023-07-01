import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://back-end:8080/api",
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default axiosInstance