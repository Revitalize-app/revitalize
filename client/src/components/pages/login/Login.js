import React, { Component } from "react";
import AuthService from "../../../service/auth.service";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInfo: {
        username: "",
        password: "",
      },
      errorMessage: "",
    };
    this.authService = new AuthService();
  }

  handleInputChange = (e) => {
    let loginInfoCopy = { ...this.state.loginInfo };
    const { name, value } = e.target;
    loginInfoCopy = { ...loginInfoCopy, [name]: value };

    this.setState({ loginInfo: loginInfoCopy });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.authService
      .login(this.state.loginInfo)
      .then(response => {
        console.log("response: ", response);
        this.props.setTheUser(response.data);
        this.props.history.push("/");
      })
      .catch((err) => {
        err.response.status === 400 &&
          this.setState({ errorMessage: err.response.data.message });
      });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <h3>Login</h3>
            <hr></hr>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="pwd">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <p
                className="error-message"
                style={{ display: this.state.errorMessage ? "block" : "none" }}
              >
                {this.state.errorMessage}
              </p>

              <Button variant="primary" type="submit">
                Log in
              </Button>
            </Form>

            <p>
              <small>
                Don´t you have an account yet? <Link style={{color: 'blue'}} to="/signup">Sign Up</Link>
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
