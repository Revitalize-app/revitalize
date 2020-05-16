import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/projects`,
            withCredentials: true
        })
    }

    getProjects = () => this.service.get('/getAllProjects')
    getProject = projectId => this.service.get(`/getOneProject/${projectId}`)
    createProject = theProject => this.service.post(`/postProject`, theProject)
}