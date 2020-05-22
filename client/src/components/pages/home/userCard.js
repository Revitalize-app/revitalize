import React from 'react'


import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const UserCard = props => {

    return (
        <Col xs={3} >
        
            <Card as="article" className="user-home-card">
                <Card.Img variant="top" src={props.profileImg} />
                <Card.Body>
                    
                    <p>{props.username}</p>
                    <small>{props.city}</small>
                </Card.Body>
            </Card>
        
        </Col>
    )
}

export default UserCard