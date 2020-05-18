import React, { Component } from 'react'
import ProjectService from '../../../service/projects.service'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './ProjectDetails.css'

import { Link } from 'react-router-dom'

class ProjectDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.projectService = new ProjectService()
    }


    getProjectInfo() {
        const id = this.props.match.params.projectId
     
        this.projectService.getProject(id)
            .then(response => this.setState(response.data))
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.getProjectInfo()
    }

    render() {
        return (
            <Container as="section" className="project-details">
            {console.log(this.state)}
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        
                    <Col md={6}>
                        <img src={this.state.photos} alt="Project photos"></img>
                    </Col>
                    <br/>
                        <h4>Details</h4>
                        <ul>
                            <li>Description: {this.state.description}</li>
                            <li>Goal: {this.state.currentAmount}€ / {this.state.goal}€</li>
                        </ul>
                    </Col>
                </Row>
                <Link to="/projects" className="back">Back</Link>
            </Container>
        )
    }
}

export default ProjectDetails