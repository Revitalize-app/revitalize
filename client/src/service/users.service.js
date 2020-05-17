import axios from 'axios'

export default class users {

    constructor () {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api`,
            withCredentials: true
        })
    }



}