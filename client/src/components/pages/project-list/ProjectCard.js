import React from 'react'

import { Link } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const ProjectCard = props => {

    return (
        <Col lg={3} md={6}>
            <Card as="article">
                <Card.Img variant="top" src={props.photos[0]} />
                <Card.Body>
                    <Card.Title>{props.description}</Card.Title>
                    <Link to={`/projects/${props._id}`} className="btn btn-dark btn-block btn-sm">see more details</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProjectCard