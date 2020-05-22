import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import AuthService from './../../../service/auth.service'

import { Link } from 'react-router-dom'



class Navigation extends Component {

    constructor(props) {
        super(props)
        this.authService = new AuthService()
    }

    logout = () => {
        this.props.setTheUser(false)
        this.authService.logout()
    }

    render() {

        return (
            <Navbar  expand="xs">
                <Navbar.Brand as="div"><Link to="/"><img src='/images/logo_name_green.svg' ></img></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as="div"><Link to="/"> <img src='/images/icon_home.svg'></img> Home</Link></Nav.Link>
                        <Nav.Link as="div"><Link to="/projects"> <img src='/images/filter.svg'></img> Discover projects</Link></Nav.Link>

                        {
                            !this.props.loggedInUser ?
                                <>
                                    <Nav.Link as="div"><Link to="/login">Login</Link></Nav.Link>
                                    <Nav.Link as="div"><Link to="/signup">Sign up</Link></Nav.Link>
                                </>

                                :
                                <>
                                    <Nav.Link as="div"><Link to="/profile"><img style={{width: '30px', borderRadius:'15px', marginRight:'10px', marginLeft:'6px'}} src={this.props.loggedInUser.profileImg}></img> My profile</Link></Nav.Link>
                                    <Navbar.Text style={{color:'white'}} >{this.props.loggedInUser ? 'Wallet: ' + this.props.loggedInUser.wallet + '€' : null}</Navbar.Text>
                                    <Nav.Link style={{color:'white'}} as="div" onClick={this.logout}>Close session</Nav.Link>
                                </>

                        }

                    </Nav>
                    
                </Navbar.Collapse>

            </Navbar>
        )
    }

}

export default Navigation