import axios from 'axios'

const services = axios.create({
    baseURL: 'http://localhost:5000'
})

export default services