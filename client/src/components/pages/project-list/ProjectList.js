import React, { Component } from "react"
import ProjectService from "../../../service/projects.service"

import "./ProjectList.css"

import ProjectCard from "./ProjectCard"
import ProjectForm from "../project-form/ProjectForm"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Toast from "react-bootstrap/Toast"
import Modal from "react-bootstrap/Modal"

class ProjectList extends Component {
  constructor() {
    super()
    this.state = {
      modalShow: false,
      toast: {
        show: false,
        text: "",
      },
      projects: [],
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
    this.getAllProjects()
    this.handleModal(false)
    this.handletoast(true, "Saved in the Data Base")
  };

  render() {
    return (
      <Container as="section">
        <h1>Projects List</h1>

        {this.props.loggedInUser && (
          <Button
            onClick={() => this.handleModal(true)}
            variant="dark"
            style={{ marginBottom: "20px" }}
          >
            Create new project
          </Button>
        )}

        <Row className="projects-list">
          {this.state.projects.map((elm) => (
            <ProjectCard key={elm._id} {...elm} />
          ))}
        </Row>

        <Modal
          show={this.state.modalShow}
          onHide={() => this.handleModal(false)}
        >
          <Modal.Body>
            <ProjectForm
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
      </Container>
    )
  }
}

export default ProjectList
