import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://16.170.251.252/api",
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default axiosInstance
