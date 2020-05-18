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
        this.state = null
        this.projectService = new ProjectService()
    }


    getProjectInfo() {
        const id = this.props.match.params.projectId
        this.projectService.getProject(id)
            .then(response => this.setState(response.data))
            .catch(err => console.log(err))
    }

    // 1. preparo info al back creando ruta y servicio para editar la informacion
    // 2. llamada al service del back
    //3. en el back: actualizar el proyecto.then( actualizar al user)
    //4. return data o true
    //5  setState con los cambios nuevos
    // añado el dinero en el goal
    // this.state.goal += this.hljs-value
    // this.state.collabores += 1

    componentDidMount = () => {
        this.getProjectInfo()

    }

    render() {

        return(
        <>
        {!this.state ?
        <h1>Loading...</h1> :
            <Container as="section" className="project-details">
            {console.log(this.state.project)}
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        
                    <Col md={6}>
                        <img src={this.state.photos} alt="Project photos"></img>
                    </Col>
                    <br/>
                        
                        <ul>
                            <li>Description: {this.state.description}</li> <br/>
                            <li>Goal: {this.state.currentAmount}€ / {this.state.goal}€</li>
                            <li>Cleaners: {this.state.helpers.length} / {this.state.helpersNeeded}</li>
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