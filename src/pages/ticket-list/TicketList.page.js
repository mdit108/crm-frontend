import React, {useState,useEffect} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {Bread} from '../../components/breadcrumb/Breadcrumb.comp'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import { TicketTable } from '../../components/ticketTable/TicketTable.comp'
import tickets from '../../assets/data/dummy-tickets.json'

export const TicketList = () => {

    const [str, setsStr] = useState('');
    const [dispTicket,SetDispTicket] = useState(tickets);

    useEffect(() => {}, [str, dispTicket])

    const handleOnChange = e => {
        const {value} = e.target;
        setsStr(value);
        searchTickets(value);
    }

    const searchTickets = str1 => {
        const displayTickets = tickets.filter(row => row.subject.toLowerCase().includes(str1.toLowerCase()))
        SetDispTicket(displayTickets);
    }


    return (
        <Container>
            <Row>
                <Col>
                     <Bread page="Ticket List" />         
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Button variant="info">Add New Ticket</Button>
                </Col>
                <Col className="text-right">
                    <SearchForm  handleOnChange={handleOnChange} str={str} />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <TicketTable tickets={dispTicket}/> 
                </Col>
            </Row>
        </Container>
           
        
    )
}
