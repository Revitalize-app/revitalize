import React from 'react'

import { Link } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const ProfileCard = props => {

    return (
        <Col xs={5} >
        <Link to={`/projects/${props._id}`}>
            <Card as="article" className="profile-card">
                <Card.Img variant="top" src={props.photos} />
                <Card.Body>
                    
                    <p>{props.city}</p>
                </Card.Body>
            </Card>
        </Link>
        </Col>
    )
}

export default ProfileCard