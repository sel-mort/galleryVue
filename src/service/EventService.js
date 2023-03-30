import axios from 'axios'

const cardAPI = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export default {
    getCards() {
        return cardAPI.get('/cards')
    },
    getCardbyId(id) {
        return cardAPI.get(`/cards/${id}`)
    },
}