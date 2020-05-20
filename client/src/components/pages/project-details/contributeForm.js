import React, { Component } from 'react'
import ProjectService from '../../../service/projects.service'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class contributeForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            amount: 1,
            
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
        // if(this.state.amount > this.props.creator.wallet || this.state.amount + this.props.project.currentAmount > this.props.project.goal){
        //     console.log("TE HAS PASAO HULIO")
        // }else{
            let amount = this.state.amount
            let contribution = {
                modifiedAmount:this.props.project.currentAmount += amount,
                modifiedWallet:this.props.creator.wallet -= amount,
                modifiedMoneySpent:this.props.creator.moneySpent += amount,
                project: this.props.project._id,
                creator: this.props.creator._id
            }
            console.log("En el submit --->")
            console.log(contribution)
            this.projectService.updateProject(contribution)
                .then(() => this.props.finishProjectPost())
                .catch(err => console.log(err))
        //}
    }

    render() {
        return (
            <Container>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="contribution">
                        <Form.Label>Your contribution</Form.Label>
                        <Form.Control name="amount" type="text" value={this.state.amount} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Button  onClick={() => this.props.closeModal()} style={{ marginRight: '10px' }}>Close</Button>
                    <Button  type="submit">Pay</Button>
                </Form>
            </Container>
        )
    }
}

export default contributeForm