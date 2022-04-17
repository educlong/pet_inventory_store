import {Container} from '@mui/material'
import { Row, Col, Image } from 'react-bootstrap';
import React from 'react';


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

/**Handle for Home Page */
export default function Home(props){    //props._courses_ store all of the data from firebase
    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col sm={12}>
                        <Image src="https://lirp.cdn-website.com/8463d849/dms3rep/multi/opt/MEGAPOS+POS+for+pet+shop-960w.jpeg" width="100%"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

