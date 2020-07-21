import React, { Component } from "react"
import ProjectService from "../../../service/projects.service"

import "./ProjectList.css"

import ProjectCard from "./ProjectCard"
import ProjectForm from "../project-form/ProjectForm"

import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Toast from "react-bootstrap/Toast"
import Modal from "react-bootstrap/Modal"
import Spinner from 'react-bootstrap/Spinner'

class ProjectList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalShow: false,
      toast: {
        show: false,
        text: "",
      },
      projects: null,
    }
    this.projectService = new ProjectService()
  }

  handleModal = (visible) => this.setState({ modalShow: visible })
  handletoast = (visible, text = "") => {
    const toastCopy = { ...this.state.toast }
    toastCopy.show = visible
    toastCopy.text = text
    this.setState({ toast: toastCopy })
  }

  getAllProjects = () => {
    this.projectService
      .getAllProjects()
      .then(response => this.setState({ projects: response.data }))
      .catch(err => console.log(err))
      
  }

  componentDidMount = () => {
    this.getAllProjects()
  }

  finishProjectPost = () => {
    this.props.fetchUser()
    this.getAllProjects()
    this.handleModal(false)
    this.handletoast(true, "Saved in the Data Base")
  }

  render() {
    return (
      <div className="projects">
      
        <br></br>
        <br></br>
        <h3>Discover</h3>

        {this.props.loggedInUser && (
          <Button
            onClick={() => this.handleModal(true)}
            className="btn-primary"
            style={{ marginBottom: "20px" }}
          >
            Create new project
          </Button>

        )}
      
        {!this.state.projects ? 
          <Spinner className='spinner' animation="border" variant="success" /> : 
        <Row className="projects-list">
          {this.state.projects.map((elm) => (
            <ProjectCard key={elm._id} {...elm} />
          ))}
        </Row>

        }
        <Modal className='create-modal'
          show={this.state.modalShow}
          onHide={() => this.handleModal(false)}
        >
          <Modal.Body>
            <ProjectForm
            creator={this.props.loggedInUser?._id}
              finishProjectPost={this.finishProjectPost}
              closeModal={() => this.handleModal(false)}
            />
          </Modal.Body>
        </Modal>

        <Toast
          onClose={() => this.handletoast(false)}
          show={this.state.toast.show}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Message</strong>
          </Toast.Header>
          <Toast.Body>{this.state.toast.text}</Toast.Body>
        </Toast>
      
      </div>
    )
  }
}

export default ProjectList
