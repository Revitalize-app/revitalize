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
                <h1>{this.state.title}</h1>
                <hr />
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h4>Info</h4>
                        <p>{this.state.description}</p>
                        <h4>Details</h4>
                        <ul>
                            <li>Description: {this.state.description}</li>
                            <li>Goal ammount: {this.state.goal}</li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <img src={this.state.photos} alt="Project photos"></img>
                    </Col>
                </Row>
                <Link to="/projects" className="btn btn-dark">Back</Link>
            </Container>
        )
    }
}

export default ProjectDetails