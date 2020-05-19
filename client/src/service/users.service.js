import axios from 'axios'

export default class services {

    constructor () {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api`,
            withCredentials: true
        })
    }

    getUsers = () => this.service.get('/getAllUsers')
    getOneUser = (userID) => this.service.get(`/getOneUser/${userID}`)
    updateUser = (userID) => this.service.post(`/updateUser/${userID}`)
    
}