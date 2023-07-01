import axios from "../axios/axios";

const AxiosRepository = {
    fetchProductsByCategory:(categoryName) => {
        return axios.get(`/products/${categoryName}`)
    },

    fetchProducts:(category) => {
        if(category != null){
            return axios.get(`/products/${category}`)
        }
        else {
            return axios.get(`/products/all`)
        }
    },

    fetchProduct:(id) => {
        return axios.get(`/products/view/${id}`)
    },

    fetchAllCategories:() => {
        return axios.get(`/categories/all`)
    },

    fetchSearchQuery:(query) => {
        return axios.get(`/products/search/${query}`)
    },

    fetchPaymentIntent:(headers, body) => {
        return axios.post(`/checkout/create-payment-intent`, headers, body)
    },
    toPaymentPage:(cartItems) => {
        return axios.post(`/checkout/create-checkout-session`, cartItems, {"content-type": "application/json"})
    },
}

export default AxiosRepository