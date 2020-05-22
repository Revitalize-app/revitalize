import React, { Component } from 'react'

import ProjectService from '../../../service/projects.service'
import UserService from '../../../service/users.service'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import CountUp from 'react-countup'


import ProfileCard from './../profile/profileCard'
import UserCard from './userCard'


import {Link} from 'react-router-dom'

import './Home.css'

class Home extends Component {

    constructor () {

        super()
        this.state = {
            allUsers: null,
            projects: null,
            sortedUsers: null,
        }

        this.projectService = new ProjectService()
        this.userService = new UserService()
        
    }



    getLists = () => {
        this.userService
            .getUsers()
            .then(response =>  this.setState({allUsers: response.data}))
            .catch(err => new Error(err))
            .then(
                this.projectService
                    .getAllProjects()
                    .then(response => this.setState({projects: response.data}))
                    .catch(err => new Error(err))
            )
            // .then(
            //     this.state.allUsers
            //         .map(elm => elm.moneySpent.sort((a, b) => a - b), 0)
            //         .then (response => this.setState({sortedUsers: response.data}))
            //         .catch(err => new Error(err))
            // )
            
    }



    


    componentDidMount = () => {
        this.getLists()
        
        
    }

    render () {
        
        return(
            <>
            <div className="main-container">

            <section className='counter-section'>

            <Row className='planet-img'>
                <img src='/images/globe.svg'></img>
            </Row>

            <Row className='counter'>
            <CountUp start={0} end={22345} duration={4} separator=" " decimals={0} decimal="," suffix=" € donated! 🥳" />
            </Row>

            
            </section>
            

            <section className ='most-recent'>
            <header><h3>The most recent</h3></header>
            {!this.state.projects || !this.state.allUsers ? 
            <Spinner className='spinner' animation="border" variant="success" /> : 
            <Row className="projects-list flex-row flex-nowrap ">
            {this.state.projects.map((elm) => (
            <ProfileCard key={elm._id} {...elm} />
            ))}
            </Row>

            }
            </section>

            <section className="info">

                
                <article className="info-body">
                    <h3>Together we can change this world!</h3>
                
                    <br></br>
                    <p>
                    This planet is your home. Why not treat it as such?
                    The only objective of Revitalize is to help you achieve it. 
                    </p>

                </article>

            </section>

            <section className="top-ranks">
            <header> <h3>Our kings and queens</h3></header>
            <article>

            {!this.state.projects || !this.state.allUsers ? 
            <Spinner className='spinner' animation="border" variant="success" /> : 
            <Row className="projects-list flex-row flex-nowrap ">
            {this.state.allUsers.map((elm) => (
            <UserCard key={elm._id} {...elm} />
            ))}
            </Row>

            }

            </article>

            </section>




            </div>
            </>
        )
    }

}

export default Home