import React, { Component } from 'react'
import ProjectService from '../../../service/projects.service'
import FileService from './../../../service/file.service'
import GmapsPlaces from './../../maps/GmapsPlaces/GmapsPlaces'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class ProjectForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            goal: 0,
            helpersNeeded: 0,
            projectType:'',
            description: '',
            photos: '',
            author: this.props.creator,
            loc: {
                city: '',
                coordinates: []
            }

            
        }
        this.projectService = new ProjectService()
        this.fileService = new FileService()
    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append('photos', e.target.files[0])
        this.fileService.handleUploadPhotos(uploadData)
            .then(response => {
                console.log('El archivo ya se ha subido. La URL de cloudinary es: ', response.data.secure_url)
                this.setState({photos: response.data.secure_url })
            })
            .catch(err => console.log(err))
    }

    getData = (data) =>{
        this.setState({
            ...this.state,
            loc: {city: data.city, coordinates: [data.coordinates.lat, data.coordinates.lng]}
        })
    }

    handleInputChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.projectService.createProject(this.state)
            .then(() => this.props.finishProjectPost())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>

                <h3>Create new project</h3>
                <hr></hr>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="photos">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control name="photos" type="file" onChange={this.handleFileUpload} />
                    </Form.Group>

                    <Form.Group controlId="goal">
                        <Form.Label>Goal</Form.Label>
                        <Form.Control name="goal" type="number" value={this.state.goal} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="helpersNeeded">
                        <Form.Label>How many helpers do you need?</Form.Label>
                        <Form.Control name="helpersNeeded" type="number" value={this.state.helpersNeeded} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="loc">
                        <Form.Label>Address</Form.Label>
                        <GmapsPlaces getData = {(data => this.getData(data))}></GmapsPlaces>
                    </Form.Group>


                    <Form.Group controlId="projectType">
                        <Form.Label>Project type</Form.Label>
                        <Form.Control as="select" name="projectType" value={this.state.projectType} onChange={this.handleInputChange}> 
                        <option value="restructuring">Restructuring</option>
                        <option value="nature cleaning">Nature Cleaning</option>
                        <option value="beach cleaning">Beach cleaning</option>
                        <option value="city cleaning">City cleaning</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" as="textarea" rows="2" type="text" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>



                    <Button type="submit">Create</Button>
                    <Button  onClick={() => this.props.closeModal()} style={{ marginRight: '10px' }}>Close</Button>
                </Form>
            </Container>
        )
    }
}

export default ProjectForm