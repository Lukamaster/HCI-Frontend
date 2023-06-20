import axios from "../axios/axios";

const AxiosRepository = {
    fetchProductsByCategory:(categoryName) => {
        return axios.get(`/products/${categoryName}`)
    },

    fetchProducts:(category) => {
        if(category != null){
            return axios.get(`/products/${category}`)
        }
        else if(category === "all") {
            return axios.get(`/products/all`)
        }
        else {
            return axios.get(`/products/all`)
        }
    },

    fetchProduct:(id) => {
        return axios.get(`/products/view/${id}`)
    },

    fetchAllProducts:() => {
        return axios.get(`/products/all`)
    },

    fetchAllCategories:() => {
        return axios.get(`/categories/all`)
    }
}

export default AxiosRepository