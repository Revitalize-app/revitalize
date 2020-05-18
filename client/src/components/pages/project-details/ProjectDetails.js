import React, { Component } from 'react'
import ProjectService from '../../../service/projects.service'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import './ProjectDetails.css'

import { Link } from 'react-router-dom'

class ProjectDetails extends Component {

    constructor(props) {
        super(props)
        this.state =  {
            project:null,
            modalShow: false
        }
        this.projectService = new ProjectService()
    }


    getProjectInfo() {
        const id = this.props.match.params.projectId
        this.projectService.getProject(id)
            .then(response => this.setState({project: response.data}))
            .catch(err => console.log(err))
    }





    componentDidMount = () => {
        this.getProjectInfo()
    }

    render() {

        return(
            <>
            {!this.state.project ?
            <h1>Loading...</h1> :
            <Container as="section" className="project-details">

                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        
                    <Col md={6}>
                        <img src={this.state.project.photos} alt="Project photos"></img>
                    </Col>
                    <br/>
                        
                        <ul>
                            <li>Description: {this.state.project.description}</li> <br/> <hr/>
                            <li>Goal: {this.state.project.currentAmount}€ / {this.state.project.goal}€ - <Button><small>Contribute</small></Button></li>
                            <li>Cleaners: {this.state.project.helpers.length} / {this.state.project.helpersNeeded} - <Button><small>Help</small></Button></li>
                        </ul>
                    </Col>
                </Row>
                <Link to="/projects" className="back">Back</Link>
            </Container>
            }
            </>
            )
        
    }
}

export default ProjectDetails