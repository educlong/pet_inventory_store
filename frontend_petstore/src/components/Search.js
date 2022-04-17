import {Container} from '@mui/material'
import React, { useState } from 'react';
import {  Row } from 'react-bootstrap';
import { ListForSearch, SearchBar, Title } from './PetStoreHandle';

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

/**Handle for Search */
export default function Search(props){
    const [isSearch, setIsSearch] = useState('');
    return (
        <Container className='my-4'>
            {/**The title */}
            <Title/>
            {/**Search Bar */}
            <Row>
                <SearchBar setSearch={(inputSearch)=> {
                    setIsSearch(inputSearch)
                    props.search(inputSearch) 
                }}/>
            </Row>
            {/**The table for animal */}
            <Row className='d-flex justify-content-end'>
                <ListForSearch pets={(props.searchResults.length>0 || isSearch!=='') ? props.searchResults : props.pets} />
            </Row>
        </Container>
    );
}

