import React, { Component } from 'react'

import ProjectService from '../../../service/projects.service'
import UserService from '../../../service/users.service'


//import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import CountUp from 'react-countup'


import ProfileCard from './../profile/profileCard'
import UserCard from './userCard'


//import {Link} from 'react-router-dom'

import './Home.css'

class Home extends Component {

    constructor () {

        super()
        this.state = {
            sortedProjects: null,
            sortedUsers: null,
            sum: 0
        }

        this.projectService = new ProjectService()
        this.userService = new UserService()
        
    }



    getLists = () => {
        this.userService
            .getUsers()
            .then(response => response.data.sort((a,b) => (a.moneySpent > b.moneySpent) ? -1 : ((b.moneySpent > a.moneySpent) ? 1 : 0)) )
            .then(response =>  this.setState({sortedUsers: response}))
            .then(() => { 
                let arr = []
                let tuto = this.state.sortedUsers
                tuto.forEach(elm => arr.push(elm.moneySpent))
                return arr.reduce ((a, b) => a + b)
                
            })
            .then(response => this.setState({sum: response}))
            .then( () =>  this.projectService.getAllProjects())
            .then(response => response.data.sort((a,b) => (a.createdAt > b.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0)))
            .then(response => this.setState({sortedProjects: response}))
            .catch(err => new Error(err))
            
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
            <CountUp start={0} end={this.state.sum} duration={4} separator=" " decimals={0} decimal="," suffix=" € donated! 🥳" />
            </Row>

            
            </section>
            

            <section className ='most-recent'>
            <header><h3>The most recent</h3></header>
            {!this.state.sortedProjects || !this.state.sortedUsers ? 
            <Spinner className='spinner' animation="border" variant="success" /> : 
            <Row className="projects-list flex-row flex-nowrap ">
            {this.state.sortedProjects.map((elm) => (
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

            { !this.state.sortedUsers ? 
            <Spinner className='spinner' animation="border" variant="success" /> : 
            <Row className="projects-list flex-row flex-nowrap ">
            {this.state.sortedUsers.map((elm) => (
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