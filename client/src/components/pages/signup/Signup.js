import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'
import FileService from './../../../service/file.service'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'


class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loginInfo: {
                username: '',
                password: '',
                email: '',
                profileImg: '',
            },
            errorMessage: ''
        }
        this.authService = new AuthService()
        this.fileService = new FileService()
    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append('profileImg', e.target.files[0])
        this.fileService.handleUploadProfilePic(uploadData)
            .then(response => {
                console.log('El archivo ya se ha subido. La URL de cloudinary es: ', response.data.secure_url)
                let loginInfoCopy = { ...this.state.loginInfo }
                loginInfoCopy = { ...loginInfoCopy, profileImg: response.data.secure_url }
                console.log(loginInfoCopy)
                this.setState({
                    loginInfo: loginInfoCopy
                })
            })
            .catch(err => console.log(err))
    }


    handleInputChange = e => {

        let loginInfoCopy = { ...this.state.loginInfo }
        const { name, value } = e.target
        loginInfoCopy = { ...loginInfoCopy, [name]: value }

        this.setState({ loginInfo: loginInfoCopy })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.authService.signup(this.state.loginInfo)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => {
                err.response.status === 400 && this.setState({ errorMessage: err.response.data.message })
            })
    }



    render() {

        return (
            <Container>

                <Row>
                    <Col md={{ span: 4, offset: 4 }}>

                        <h3>Sign up</h3>
                        <hr></hr>
                        <Form onSubmit={this.handleSubmit}>

                            <Form.Group controlId="name">
                                <Form.Label>Username</Form.Label>
                                <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" value={this.state.email} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="pwd">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="profileImg">
                                    <Form.Label>Choose your profile pic</Form.Label>
                                    <Form.Control name="profileImg" type="file" onChange={this.handleFileUpload} />
                                </Form.Group>

                            <p
                                className='error-message'
                                style={{ display: this.state.errorMessage ? 'block' : 'none' }}
                            >{this.state.errorMessage}</p>

                            <Button variant="primary" type="submit">Sign up</Button>
                        </Form>

                        <p><small>Do you have already an account? <Link style={{color: 'blue'}} to="/login">Login</Link></small></p>

                    </Col>
                </Row>

            </Container>
        )
    }
}


export default Signup