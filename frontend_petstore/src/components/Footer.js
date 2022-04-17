import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {NavLink} from "react-router-dom";

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

/**Handle for Footer */
export default function Footer(){
    return (    /**Footer */
        <footer className="bg-dark py-4 mt-auto">
            <Container className='px5 text-white' fluid>
                <Row>
                    <Col sm={12}  className='d-flex justify-content-center'>
                        <Container fluid>
                            <Row className="d-flex justify-content-center ">
                                <h5  className="d-flex justify-content-center ">PET STORE</h5>
                                Address: 81 West 1st St., Hamilton, Ontario, L9C 3C5, Canada <br/>
                                Hotline: (+1)-289-933-7974 (Nguyen Duc Long)<br/>
                                Email: 000837437@mohawkcollege.com<br/>
                            </Row>
                            <Row className="d-flex justify-content-center ">
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} className="d-flex justify-content-start">
                        <div className="small m-0 text-white">
                            Copyright © Pet Store {new Date().getFullYear()}
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} className="d-flex justify-content-end">
                        <NavLink className="link-light small" to="/news">News</NavLink>
                        <span className="text-white mx-1">·</span>
                        <NavLink className="link-light small" to="/terms">Terms</NavLink>
                        <span className="text-white mx-1">·</span>
                        <NavLink className="link-light small" to="/contact">Contact</NavLink>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
