import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { TicketTable } from '../../components/ticketTable/TicketTable.comp'
import Tickets from '../../assets/data/dummy-tickets.json'
import { Bread } from '../../components/breadcrumb/Breadcrumb.comp'
export const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col>
                   <Bread page="Dashboard"/> 
                </Col>
            </Row>

            <Row>
                <Col className="mt-5 mb-2 text-center">
                    <Button variant="info" style={{fontSize:'2rem',padding:"10px 30px"}}>Add new ticket</Button>
                </Col>
            </Row>
            <Row>
                <Col className="mb-2 text-center">
                    <div> Total Tickets: 50</div>
                    <div> Pending Tickets: 5</div>
                </Col>
            </Row>
            <Row>
                <Col className="mt-2">
                    Recently Added Tickets
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className="recent-ticket">
                    <TicketTable tickets={Tickets}></TicketTable>
                </Col>
            </Row>
        </Container>
    )
}
