import url from './url';
import axios from 'axios';


const api = {
    verifyUser: async () => {
        try {
            const response = await axios.get(`${url}/verifyuser`, { withCredentials: true })
            console.log(response)
            return response
        } catch (err) {
            throw err
        }
    },
    logOut: async () => {
        try {
            const response = await axios.get(`${url}/logout`, { withCredentials: true })
            console.log(response)
            return response
        } catch (err) {
            throw err
        }
    },
    getItem: async (email) => {
        try {
            const response = await axios.post(`${url}/getitem`, email)
            console.log(response)
            return response
        } catch (err) {
            throw err
        }
    },
    deleteItem: async (id) => {
        try {
            console.log(id)
            const response = await axios.post(`${url}/deleteitem`, id)
            console.log(response)
            return response
        } catch (err) {
            throw err;
        }
    }
}

export default api;
