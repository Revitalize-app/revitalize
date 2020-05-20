import React, { Component } from 'react'
import ProjectService from '../../../service/projects.service'
import ProfileCard from './profileCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
import './profile.css'


    export default class Profile extends Component {

        constructor (props) {
            super(props)

            this.state = {
                contributingProj: []
            }
            this.projectService = new ProjectService()
            
        }

        getNewSets = () => {

            const contributingProj = this.props.loggedInUser.contributing
            const uniqueID = Array.from(new Set(contributingProj.map(elm => elm._id)))
                            .map(id => {
                                return contributingProj.find(elm => elm._id === id)
                    })
            return this.setState({contributingProj: uniqueID})
            

        }

        componentDidMount = () => {
        this.getNewSets()
    }


        render() {
            return (
                <>
                <Container className="main-container">
                    <Container as="section" className="profile-header">

                        <Row as="header">
                            <Col xs={{span:6, offset: 4}} > <img alt={this.props.loggedInUser.username} src={this.props.loggedInUser.profileImg}></img> </Col>
                        </Row>
                        <Row as="article">
                            <Col xs={{span:6, offset: 3}} > <h6>{this.props.loggedInUser.username}</h6> </Col>
                        </Row>
                        <Row as="article">
                            <Col xs={{span:6, offset: 3}} > Wallet: {this.props.loggedInUser.wallet} €</Col>
                        </Row>

                    </Container>

                    <Container as="section" className="profile-projects">

                        <h5>Own projects</h5>
                    <Row as='article' className="projects-profile">
                        {this.props.loggedInUser.ownProjects.map((elm) => (
                    <ProfileCard key={elm._id} {...elm} />
                        ))}
                    </Row>

                    <h5>Contributing</h5>
                    <Row as='article' className="projects-profile flex-row flex-nowrap">
                        {this.state.contributingProj.map((elm) => (
                    <ProfileCard  key={elm._id} {...elm} />
                        ))}
                    </Row>

                    <h5>Helping</h5>
                    <Row as='article' className="projects-profile">
                        {this.props.loggedInUser.helping.map((elm) => (
                    <ProfileCard key={elm._id} {...elm} />
                        ))}
                    </Row>
                    
                    <Row className="profile-button">
                        <Col xs={{span:12, offset:2}} >

                        <Link to={`/projects`} className="btn-primary"> Discover new projects </Link>

                        </Col>
                    </Row>
                    </Container>
                    </Container>

                </>
            )
        }

    }