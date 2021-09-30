import React from 'react'
import { Form, Jumbotron, Button, Row, Col } from 'react-bootstrap'
import './add-ticket-form-style.css'

export const AddTicketForm = ({handleOnSubmit,handleOnChange,formData}) => {
    return (
        <Jumbotron className="mt-3 add-new-ticket bg-light">
            <h1 className="text-info text-center">Add New Ticket </h1>
            <hr />
            <Form autocomplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                            <Form.Label column sm={3}> Email Adress</Form.Label>
                            <Col sm={9}>
                            <Form.Control
                                value = {formData.subject}
                                name="subject"
                                onChange = {handleOnChange}
                                placeholder = "Enter Subject"
                                required
                                />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}> Issue Found </Form.Label>
                            <Col sm={9}>
                            <Form.Control
                                type="date"
                                name="issueDate"

                                value={formData.issueDate}
                                onChange = {handleOnChange}
                                required
                              />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}> Details </Form.Label>
                            <Col sm={9}>
                            <Form.Control
                                as="textarea"
                                name="details"

                                value={formData.details}
                                onChange = {handleOnChange}
                                required
                                />
                                </Col>
                        </Form.Group>
                        <Button type="submit" variant="info" block>Login</Button>
            </Form>
        </Jumbotron>
    )
}
