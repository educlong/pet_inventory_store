import {Container} from '@mui/material'
import { Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import {InsertHandle, IsInsert, ListOfPets, Title} from './PetStoreHandle'

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

/**Handle for Inventory */
export default function Inventory(props){
    const [animal, setAnimal] = useState([]);           /**state for all animal */
    const [updateName, setUpdateName] = useState("");   /**state for input update name */
    const [updateDes, setUpdateDes] = useState("");     /**state for input update description */
    const [updateAge, setUpdateAge] = useState(0);      /**state for input update age */
    const [updatePrice, setUpdatePrice] = useState(0);  /**state for input update price */
    const [isAdd, setAdd] = useState(false);            /**state for Add button (plus (+) button) */
    const [addPet, setAddPet] = useState({              /**state for new Pet after click on Add button */
        animal: '',
        description: '',
        age: 0,
        price:0
    })

    /**Typing while handling update process */
    const isChange =(event, column)=>{
        var targetValue = event.target.value;
        if(column==="animal") setUpdateName(targetValue);
        if(column==="des") setUpdateDes(targetValue);
        if(column==="age") setUpdateAge(parseInt(targetValue));
        if(column==="price") setUpdatePrice(parseInt(targetValue));
    }

    /**Handling after click on Update button (pencil button) */
    function updating(pet){
        let _pets = [];
        props.pets.forEach(animal => {
            animal.isUpdate = false;
            _pets.push(animal);
        })
        setAnimal(_pets)
        _pets = [];
        props.pets.forEach(animal => {
            if(animal.id === pet.id) animal.isUpdate = true;
            _pets.push(animal);
        });
        setAnimal(_pets)
        setUpdateName(pet.animal)
        setUpdateDes(pet.description);
        setUpdateAge(pet.age);
        setUpdatePrice(pet.price);
    }

    /**Handling after click on Update Success Button (checked (v) button) */
    function updated(pet){
        props.updates({
            id: pet.id,
            animal: updateName,
            description: updateDes,
            age: parseInt(updateAge),
            price: parseInt(updatePrice),
            isUpdate: false
        })
    }

    /**Handling after click on Delete Button (trash button) */
    function deleting(pet){
        if(window.confirm(`Delete the pet: ${pet.animal}`))
            props.deleted(pet);
    }

    /**Handling after click on Add Button (plus (+) button) */
    function insertPet(){
        if(addPet.animal!=='' && addPet.description!=='' && addPet.age>0 && addPet.price>0)
            props.addPet(addPet);
        setAddPet({animal: '', description: '', age: 0, price:0})
    }
    return (
        <Container className='my-4'>
            {/**The title */}
            <div className='my-5'>
                <Title/>
            </div>
            {/**The table of animals, and add handling */}
            <Row className='d-flex justify-content-end'>
                {/**The table of animals*/}
                <ListOfPets isAdd={isAdd} pets={props.pets} _updateName={updateName} 
                    _updateDes={updateDes} _updateAge={updateAge} _updatePrice={updatePrice}
                    isChange={ (event, column) => isChange(event, column) }
                    updating={(pet)=>updating(pet)}
                    updated={(pet)=>updated(pet)}
                    deleting={(pet)=>deleting(pet)}/>
                {/**Add Form */}
                { 
                    !isAdd ? "" : <InsertHandle pets={props.pets} addPet={addPet} setAddPet={setAddPet} insertPet={()=>insertPet()}/>
                }
                {/**Add Button (plus (+) or minus (-) button) */}
                <Col xs={1} sm={1}>
                    { 
                        isAdd 
                        ? <IsInsert variant='dark' isInsert={false} setAdd={()=>setAdd(false)} icon={<AiIcons.AiFillMinusCircle className='h4 mb-0'/>}/>
                        : <IsInsert variant='primary' isInsert={true} setAdd={()=>setAdd(true)} icon={<AiIcons.AiFillPlusCircle className='h4 mb-0'/>}/> 
                    }
                </Col>
            </Row>
        </Container>
    );
}