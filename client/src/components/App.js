import React, { Component } from "react"


import { Switch, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Navigation from "./ui/navbar/Navbar"
import ProjectList from "./pages/project-list/ProjectList"
import ProjectDetails from "./pages/project-details/ProjectDetails"
import Signup from "./pages/signup/Signup"
import Login from "./pages/login/Login"
import Profile from "./pages/profile/Profile"
import Home from './pages/home/Home'

import AuthService from "./../service/auth.service"

class App extends Component {
  constructor() {
    super()
    this.state = { loggedInUser: null }
    this.authService = new AuthService()
  }

  setTheUser = (userObj) =>
    this.setState({ loggedInUser: userObj }, () =>
      console.log("El estado de App ha cambiado:", this.state)
    )

  fetchUser = () => {
    
      this.authService
      .isLoggedIn()
      .then((response) => this.setTheUser(response.data))
      .catch(() => this.setTheUser(false))
    
    
  }

  componentDidMount(){
    !this.state.loggedInUser && this.fetchUser()
  }

  render() {


    return (
      <>
        <Navigation
          setTheUser={this.setTheUser}
          loggedInUser={this.state.loggedInUser}
        />

        <main>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Home loggedInUser={this.state.loggedInUser} />
              )}
            />
            <Route
              path="/projects"
              exact
              render={(props) => (
                <ProjectList loggedInUser={this.state.loggedInUser} fetchUser={this.fetchUser}/>
              )}
            />
            <Route
              path="/projects/:projectId"
              render={(props) => <ProjectDetails setTheUser={this.setTheUser} fetchUser={this.fetchUser} {...props} user={this.state.loggedInUser}/>}
            />
            <Route
              path="/signup"
              render={(props) => (
                <Signup {...props} setTheUser={this.setTheUser} />
              )}
            />
            <Route
              path="/login"
              render={(props) => (
                <Login {...props} setTheUser={this.setTheUser} />
              )}
            />
            <Route
              path="/profile"
              render={(props) =>
                this.state.loggedInUser ? (
                  <Profile  loggedInUser={this.state.loggedInUser} />
                ) : (
                  <Login {...props} setTheUser={this.setTheUser} />
                )
              }
            />
          </Switch>
        </main>
      </>
    )
  }
}

export default App;
