import React from 'react'
import { Button, Form } from 'react-bootstrap'

export const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <Form.Text> Reply here to update the ticket </Form.Text>
            <Form.Control
                value={msg}
                onChange = {handleOnChange}
                as="textarea"
                row="5"
                name="detail"
            ></Form.Control>
            <div className="text-right mt-3 mb-3">
            <Button variant="info" type="submit">Reply</Button>
            </div>
        </Form>
    )
}
