import axios from "axios"

export default class services {
    constructor() {
    this.service = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/api`,
        withCredentials: true,
    })
}

handleUpload = theFile => this.service.post('/upload', theFile)
handleUploadProfilePic = theFile => this.service.post('/uploadProfileImg', theFile)

}