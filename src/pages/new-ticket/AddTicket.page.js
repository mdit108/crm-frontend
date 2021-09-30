import React, {useState,useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bread } from '../../components/breadcrumb/Breadcrumb.comp'
import { AddTicketForm } from '../../components/add-ticket-forn/AddTicketForm.comp'


const initialFormData = {
    subject:'',
    issueDate: null,
    details: '',
}
export const AddTicket = () => {

    const [formData,setFormData] = useState(initialFormData);
    // useEffect(() => {}, [formData])

    const handleOnChange = e => {
        const {name,value} =e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    const handleOnSubmit = e=>{
        e.preventDefault();
    };
    return (
        <Container>
            <Row>
                <Col>
                    <Bread page="New Ticket"></Bread>
                </Col>
            </Row>
            <Row>
                <AddTicketForm 
                formData = {formData}
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                />
            </Row>
        </Container>
    )
}
