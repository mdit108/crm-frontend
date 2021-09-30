import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import logo from '../../assets/img/CRM.png'
export const Header = () => {
    return (
        <Navbar
        collapseOnSelect
        variant="dark"
        bg="info"
        expand="md"
        >
            <Navbar.Brand>
                <img src={logo} width="50px" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/tickets">Tickets</Nav.Link>
                    <Nav.Link href="/logout">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
