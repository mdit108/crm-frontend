import React from 'react'
import propTypes from 'prop-types'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
export const ResetPassword = ({handleOnChange,email,handleOnResetSubmit,formSwitcher}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Reset Password</h1>
                    <hr />
                    <Form onSubmit={handleOnResetSubmit}>
                        <Form.Group>
                            <Form.Label> Email Adress</Form.Label>
                            <Form.Control
                                type="email"
                                value = {email}
                                name="email"
                                onChange = {handleOnChange}
                                placeholder = "Enter Email"
                                required
                                />
                        </Form.Group>
                        <Button type="submit">Reset</Button>
                    </Form>
                    <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#" onClick={()=>formSwitcher("login")}>Or Login</a>
                </Col>
            </Row>

        </Container>
    )
}

ResetPassword.propTypes = {
    formSwitcher : propTypes.func.isRequired,
    handleOnChange : propTypes.func.isRequired,
    handleOnResetSubmit : propTypes.func.isRequired,
    email : propTypes.string.isRequired,
}
