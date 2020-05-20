import React, { Component } from 'react'
import ProjectService from '../../../service/projects.service'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Toast from "react-bootstrap/Toast"
import Modal from "react-bootstrap/Modal"
import ContributeForm from './contributeForm'

import './ProjectDetails.css'

import { Link } from 'react-router-dom'

class ProjectDetails extends Component {

    constructor(props) {
        super(props)
        this.state =  {
            project:null,
            modalShow: false,
            toast: {
                show: false,
                text: "",
            },
        }
        this.projectService = new ProjectService()
    }


    getProjectInfo() {
        const id = this.props.match.params.projectId
        this.projectService.getProject(id)
            .then(response => this.setState({project: response.data}))
            .catch(err => console.log(err))
    }

    handleModal = (visible) => this.setState({ modalShow: visible })
    handletoast = (visible, text = "") => {
    const toastCopy = { ...this.state.toast }
    toastCopy.show = visible
    toastCopy.text = text
    this.setState({ toast: toastCopy })
    }


    finishProjectPost = () => {
    this.getProjectInfo()
    this.handleModal(false)
    this.handletoast(true, "Your contribution changes the world in better")
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
                            <li>Goal: {this.state.project.currentAmount}€ / {this.state.project.goal}€ - <Button onClick={() => this.handleModal(true)}><small>Contribute</small></Button></li>
                            <li>Cleaners: {this.state.project.helpers.length} / {this.state.project.helpersNeeded} - <Button><small>Help</small></Button></li>
                        </ul>
                    </Col>
                    <Modal show={this.state.modalShow} className="contribution-modal" onHide={() => this.handleModal(false)} >
                        <Modal.Body>
                            <ContributeForm
                            project={this.state.project}
                            creator={this.props.user}
                            finishProjectPost={this.finishProjectPost}
                            closeModal={() => this.handleModal(false)}
                            />
                    </Modal.Body>
        </Modal>
        <Toast className="contribution-toast" onClose={() => this.handletoast(false)} show={this.state.toast.show} delay={3000} autohide >
            <Toast.Header>

            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Cool!</strong>

            </Toast.Header>
            
            <Toast.Body>{this.state.toast.text}</Toast.Body>
        </Toast>
                </Row>
                <Link to="/projects" className="back">Back</Link>
            </Container>
            }
            </>
            )
        
    }
}

export default ProjectDetails