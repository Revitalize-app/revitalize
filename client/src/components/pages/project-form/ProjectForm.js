import React, { Component } from 'react'
import ProjectService from '../../../service/projects.service'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class ProjectForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            description: '',
            goal: 0,
            
        }
        this.projectService = new ProjectService()
    }


    handleInputChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.projectService.createProject(this.state)
            .then(() => this.props.finishProjectPost())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>

                <h1>Create new project</h1>
                <hr></hr>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="desc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" type="text" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="inv">
                        <Form.Label>Goal</Form.Label>
                        <Form.Control name="inversions" type="text" value={this.state.inversions} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Button  onClick={() => this.props.closeModal()} style={{ marginRight: '10px' }}>Close</Button>
                    <Button type="submit">Create</Button>
                </Form>
            </Container>
        )
    }
}

export default ProjectForm