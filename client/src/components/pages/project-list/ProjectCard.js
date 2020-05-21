import React from 'react'

import { Link } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const ProjectCard = props => {

    return (
        <Col lg={3} md={6}>
            <Card as="article" className="project-list-card">
                <Card.Img variant="top" src={props.photos} />
                <Card.Body>
                    <Card.Title>{props.description}</Card.Title>
                    <small>#{props.projectType}</small>
                    <p>{props.loc.city}</p>
                    <Link to={`/projects/${props._id}`} className="btn-primary  btn-block">see more details</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProjectCard