import React, { Component } from 'react'
import ProjectService from '../../../service/projects.service'
import GmapMap from './../../maps/gMapsMap/map'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Toast from "react-bootstrap/Toast"
import Modal from "react-bootstrap/Modal"
import Spinner from 'react-bootstrap/Spinner'

import ContributeForm from './contributeForm'

import './ProjectDetails.css'


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

    addHelper = () => {
        console.log(this.state.project._id, this.props.user._id)
        this.projectService.addHelper({project: this.state.project._id, helper: this.props.user._id})
        .then(response => this.finishProjectPost())
        .catch(err => console.log(err))
    }

    finishProjectPost = () => {
    this.getProjectInfo()
    this.handleModal(false)
    this.handletoast(true, "Your contribution changes the world in better")
    this.props.fetchUser()
    }

    componentDidMount = () => {
        this.getProjectInfo()
    }

    render() {

        return(
            <>
            {!this.state.project ?
            <Spinner className='spinner' animation="border" variant="success" /> :
            <Container as="section" className="project-details">

                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        
                    <Col md={6}>
                        <img src={this.state.project.photos} alt="Project photos"></img>
                    </Col>
                    <br/>
                        
                        <ul>
                            <li>Description: {this.state.project.description}</li> <br/>
                            <li><strong>Author: {this.state.project.author.username}</strong></li>
                            <hr/>
                            <li>Goal: {this.state.project.currentAmount}€ / {this.state.project.goal}€  {this.props.user && <Button onClick={() => this.handleModal(true)}><small>Contribute</small></Button>} </li>
                            <li>Cleaners: {this.state.project.helpers.length} / {this.state.project.helpersNeeded}  {this.props.user && <Button onClick={()=>this.addHelper()}><small>Help</small></Button> }</li>
                        </ul>
                    </Col>
                    <Modal show={this.state.modalShow} className="contribution-modal" onHide={() => this.handleModal(false)} >
                        <Modal.Body>
                            <ContributeForm setTheUser = {this.props.setTheUser}
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
                <GmapMap pos={this.state.project.loc.coordinates} marker={true} />
            </Container>
            }
            </>
            )
        
    }
}

export default ProjectDetails