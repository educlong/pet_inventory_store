import React from 'react';
import {NavLink} from "react-router-dom";
import { Navbar, Container, Nav, Row, Col  } from 'react-bootstrap';

/**
 * StAuth10244: I Nguyen Duc Long, 000837437 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.
 * @returns 
 */
/**
 * @date April 03, 2022
 * @author DUC LONG NGUYEN (Paul)
 * @returns 
 */

/**Handle for Navigation */
export default function Navigation(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='w-100 position-fixed sticky-top'>
            <Container fluid>
                <Navbar.Brand href="/home" className='m-0 p-0'>
                    <Row className='m-0 p-0'>
                        <Col sm={3} className="mr-0 pr-0">
                        </Col>
                        <Col sm={8} className=' ml-0 pl-0 mt-4 pt-3'>
                            <span >PET STORE</span>
                        </Col>
                    </Row>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mt-4 pt-2' />
                <Navbar.Collapse id="responsive-navbar-nav " className='mt-4 pt-3'>
                    <Nav className="ms-auto">
                        <NavLink to="/home" className="nav-link h6">Home</NavLink>
                        <NavLink to="/inventory" className="nav-link h6">Inventory</NavLink>
                        <NavLink to="/search" className="nav-link h6">Search</NavLink>
                        <NavLink to="/about" className="nav-link h6">About</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}