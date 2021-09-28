import React from 'react'
import propTypes from 'prop-types'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
export const LoginForm = ({handleOnChange,email,formSwitcher,pass,handleOnSubmit}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr />
                    <Form onSubmit={handleOnSubmit}>
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
                        <Form.Group>
                            <Form.Label> Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={pass}
                                onChange = {handleOnChange}
                                placeholder = "Enter Password"
                                required
                                />
                        </Form.Group>
                        <Button type="submit">Login</Button>
                    </Form>
                    <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#" onClick={()=>formSwitcher("reset")}>Forgot Password</a>
                </Col>
            </Row>

        </Container>
    )
}

LoginForm.propTypes = {
    formSwitcher : propTypes.func.isRequired,
    handleOnChange : propTypes.func.isRequired,
    handleOnSubmit : propTypes.func.isRequired,
    email : propTypes.string.isRequired,
    pass : propTypes.string.isRequired
}
