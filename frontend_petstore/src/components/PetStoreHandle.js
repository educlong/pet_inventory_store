import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Button, Col, Form, FormControl, InputGroup, Row } from "react-bootstrap"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as React from 'react';
import { Container } from '@mui/material';


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

/**The title of table */
export function Title(props){
    return(
        <Row  >
            <Col xs={12}>
                <h3 className='d-flex justify-content-center'>
                    LIST OF ANIMALS IN PET STORE
                </h3>
            </Col>
        </Row>
    )
}

/**Page: Inventory */
/**The Table for all animal */
export function ListOfPets(props){
    return(
        <Col xs={12} sm={12} lg={props.isAdd ? 7 : 11}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="customized table">
                    <TableHead>
                        <TableRow className='bg-dark'>
                            <TableCell className=' text-white'>Animal</TableCell>
                            <TableCell className=' text-white' align="left">Description</TableCell>
                            <TableCell className=' text-white' align="left">Age</TableCell>
                            <TableCell className=' text-white' align="left">Price</TableCell>
                            <TableCell className=' text-white' align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        props.pets.map((pet, index) => (
                            pet.isUpdate ? (
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component="th" scope="row">
                                        <FormControl aria-label='Default' id={`${pet.id}-${pet.animal}`}
                                                autoFocus
                                                aria-describedby="inputGroup-sizing-default" 
                                                value={props._updateName}
                                                onChange={(event) => props.isChange(event, "animal")}
                                                />  
                                    </TableCell>
                                    <TableCell align="right">
                                        <FormControl aria-label='Default' id={`${pet.id}-${pet.description}`}
                                                aria-describedby="inputGroup-sizing-default" 
                                                value={props._updateDes}
                                                onChange={(event) => props.isChange(event, "des")}/>
                                    </TableCell>
                                    <TableCell align="right">
                                        <FormControl aria-label='Default' id={`${pet.id}-${pet.age}`} type="number"
                                                aria-describedby="inputGroup-sizing-default" 
                                                value={props._updateAge}
                                                onChange={(event) => props.isChange(event, "age")}/>
                                    </TableCell>
                                    <TableCell align="right">
                                        <FormControl aria-label='Default' id={`${pet.id}-${pet.price}`} type="number"
                                                aria-describedby="inputGroup-sizing-default" 
                                                value={props._updatePrice}
                                                onChange={(event) => props.isChange(event, "price")}/>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant='success' className='mx-2 d-flex justify-content-center'  onClick={()=>props.updated(pet)}>
                                            <BsIcons.BsFillCheckCircleFill />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                            :
                            (
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component="th" scope="row">{pet.animal}</TableCell>
                                    <TableCell component="th" scope="row">{pet.description}</TableCell>
                                    <TableCell component="th" scope="row">{pet.age}</TableCell>
                                    <TableCell component="th" scope="row">{pet.price}</TableCell>
                                    <TableCell align="right">
                                        <Container>
                                            <Row>
                                                <Col xs={6}>
                                                    <Button variant='warning' className='mx-2 d-flex justify-content-center'  onClick={()=>props.updating(pet)}>
                                                            <BsIcons.BsPenFill/>
                                                    </Button>
                                                </Col>
                                                <Col xs={6}>
                                                    <Button variant='danger' className='mx-2 d-flex justify-content-center'  onClick={()=>props.deleting(pet)}>
                                                        <AiIcons.AiFillDelete/>
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </TableCell>
                                </TableRow>
                            )
                        ))
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </Col>
    )
}


/**Page: Inventory */
/**Handling for Add new animal */
function FormAdd(props){
    return(
        <Form.Group as={Row} className="mb-3" controlId={props.formBasic}>
            <Form.Label column sm={3}>{props.label}</Form.Label>
            <Col sm={9}>
                <Form.Control type={props.type} placeholder={props.placeholder} 
                    autoFocus={props.label==="Animal" ? true: false}
                    value={props.valueInput}
                    onChange={(event)=>{
                        props.setInsertValue(event.target.value)
                    }}/>
            </Col>
        </Form.Group>
    )
}
/**Page: Inventory */
/**Handling for Add new animal */
export function InsertHandle(props){
    return(
        <Col xs={11} sm={11} lg={4} className="text-center">
            <h3 className="my-4"> Add an animal</h3>
            <FormAdd formBasic="formBasicText" label="Animal" type="text" placeholder="Animal" 
                pets={props.pets} focus={true}
                valueInput={props.addPet.animal}
                setInsertValue={(_input)=>{
                    props.setAddPet({...props.addPet, animal: _input})
                }}/>
            <FormAdd formBasic="formBasicText" label="Description" type="text" placeholder="Description" 
                pets={props.pets} focus={false}
                valueInput={props.addPet.description}
                setInsertValue={(_input)=>{
                    props.setAddPet({...props.addPet, description: _input})
                }}/>
            <FormAdd formBasic="formBasicNumber" label="Age" type="number" placeholder="Age" 
                pets={props.pets} focus={false}
                valueInput={props.addPet.age}
                setInsertValue={(_input)=>{
                    props.setAddPet({...props.addPet, age: parseInt(_input)})
                }}/>
            <FormAdd formBasic="formBasicNumber" label="Price" type="number" placeholder="Price" 
                pets={props.pets} focus={false}
                valueInput={props.addPet.price}
                setInsertValue={(_input)=>{
                    props.setAddPet({...props.addPet, price: parseInt(_input)})
                }}/>
            <Button variant="primary" type="button" onClick={()=> props.insertPet()}>
                Add
            </Button>
            <br/>
            {
                (props.addPet.animal==='' || props.addPet.description==='' 
                    || props.addPet.age<=0 || props.addPet.price<=0) ?
                    <span className='text-danger'>Please typing all of fields </span>
                : ""
            }
        </Col>
    )
}

/**Page: Inventory */
/**Checking if Add Button is plus (+) button or minus (-) button */
export function IsInsert(props){
    return(
        <Button variant={props.variant} className='mx-2 d-flex justify-content-center'  onClick={()=> props.setAdd(props.isInsert) }>
            {props.icon}
        </Button>
    )
}

/**Page: Search */
/**The Table for all animal */
export function ListForSearch(props){
    return(
        <Col xs={12} sm={12}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow className='bg-dark'>
                            <TableCell className=' text-white'>Animal</TableCell>
                            <TableCell className=' text-white' align="left">Description</TableCell>
                            <TableCell className=' text-white' align="left">Age</TableCell>
                            <TableCell className=' text-white' align="left">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        props.pets.map((pet, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                <TableCell component="th" scope="row">{pet.animal}</TableCell>
                                <TableCell component="th" scope="row">{pet.description}</TableCell>
                                <TableCell component="th" scope="row">{pet.age}</TableCell>
                                <TableCell component="th" scope="row">{pet.price}</TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </Col>
    )
}

/**Page: Search */
/**Handling for Search Bar */
export function SearchBar(props){
    return(
        <Col xs={12} sm={12} md={4} className="my-4">
            <InputGroup size="lg">
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
                    placeholder="Search courses" 
                    onChange={(event)=>  props.setSearch(event.target.value)  }/>
                <InputGroup.Text id="inputGroup-sizing-lg" className="bg-transparent">
                    <FaIcons.FaSearch/>
                </InputGroup.Text>
            </InputGroup>
        </Col>
    )
}