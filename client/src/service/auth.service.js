import axios from "axios"

export default class services {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`,
      withCredentials: true,
    })
  }

  signup = ({ username, email, password, profileImg }) => this.service.post("/signup", { username, email, password, profileImg })
  login = ({ username, password }) => this.service.post("/login", { username, password })
  logout = () => this.service.post("/logout")
  isLoggedIn = () => this.service.get("/loggedin")
}
