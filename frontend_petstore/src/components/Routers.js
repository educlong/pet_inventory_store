import { useEffect, useState } from 'react';
import { Routes ,Route, Navigate } from 'react-router-dom';
import About from './about/About';
import Home from './Home';
import Inventory from './Inventory';
import Search from './Search';
import NotFoundPage from './NotFoundPage'

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

// Material UI is included in the install of the front end, so we have access
// to components like Buttons, etc, when we import them.
export default function Routers() { 
    
    // isLoaded keeps track of whether the initial load of pet data from the
    // server has occurred.  pets is the array of pets data in the table, and 
    // searchResults is the array of pets data after a search request.
    const [isLoaded, setIsLoaded] = useState(false);
    const [pets, setPets] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    // fetches all pet data from the server
    function fetchPets()
    {
        fetch("http://localhost:3001/api?act=getall")
        .then(res => res.json())
        .then(
        (result) => {
            let _pets = [];
            result.forEach(pet => _pets.push({...pet, isUpdate: false}) );
            setPets(_pets);
            setIsLoaded(true);
        })
    }
    
    // use fetchPets as an effect with an empty array as a 2nd argument, which 
    // means fetchPets will ONLY be called when the component first mounts
    useEffect(fetchPets, []);
    
    // Inserts a pet with hardcoded data in the URL for each query parameter, we 
    // could insert a pet with custom data by building a string like this:
    //
    // let url = "http://localhost:3001/api?act=add&animal=" + animal + ...
    //
    // fetch(url)
    // .then( ... )...
    //
    function addPet(pet)
    {
        fetch(`http://localhost:3001/api?act=add&animal=${pet.animal}&description=${pet.description}&age=${pet.age}&price=${pet.price}`)
        .then(res => res.json())
        .then(
        (result) => {
            fetchPets();
        })    
    }

    // Deletes a pet from the pet inventory, using a hardcoded id query parameter
    // Again we could delete a pet with custom data by building a string like:
    //
    // let url = "http://localhost:3001/api?act=delete&id=" + id
    //
    // fetch(url)
    // .then( ... )...
    //
    // 
    function deletePet(pet)
    {
        fetch(`http://localhost:3001/api?act=delete&id=${pet.id}`)
        .then(res => res.json())
        .then(
        (result) => {
            fetchPets();
        })    
    }

    // Updates a pet in the pet inventory.  Again we use hardcoded data but 
    // could build a custom fetch URL string.
    function updatePet(pet)
    {
        fetch(`http://localhost:3001/api?act=update&id=${pet.id}&animal=${pet.animal}&description=${pet.description}&age=${pet.age}&price=${pet.price}`)
        .then(res => res.json())
        .then(
        (result) => {
            fetchPets();
        });
    }  
    
    // Searches for pets in the pet inventory.  Again we use hardcoded data but
    // we could build a custom fetch URL string.
    function searchPet(word)
    {
        fetch(`http://localhost:3001/api?act=search&term=${word.trim()!=='' ? word.trim() : ""}`)
        .then(res => res.json())
        .then(
        (result) => {
            let _pets = [];
            result.forEach(pet => _pets.push({...pet, isUpdate: false}) );
            setSearchResults(_pets);
        });
    }
    

    // If data has loaded, render the table of pets, buttons that execute the 
    // above functions when they are clicked, and a table for search results. 
    // Notice how we can use Material UI components like Button if we import 
    // them as above.
    //
    if (!isLoaded) {
        return <NotFoundPage loadingPage ={true}/>
    } else {
        return (
            <div>
                {/*
                A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time
                */}
                <Routes>
                    <Route path='/' element={<Home/>}/>     {/**route to /home */}
                    <Route path='/home' element={<Home/>}/> {/**route to /home */}
                    <Route path='/inventory'                 /**route to /inventory */
                        element={<Inventory 
                            pets = {pets} 
                            addPet = {(pet) => addPet(pet)}  /**Call addPet, deletePet and updatePet functions into Inventory component */
                            deleted={(pet)=> deletePet(pet)}
                            updates={(pet)=> updatePet(pet)}/>}/>
                    <Route path='/search'                    /**route to /search */
                        element={<Search 
                            searchResults = {searchResults}
                            pets = {pets} 
                            search={(word) => searchPet(word)} />}/>    {  /**Call searchPet function into Search component */}
                    <Route path='/about' element={<About/>}/>       {/**route to /about */}
                    <Route path='*' element={<Navigate to='/not-found-page'/>}/>    {/**route to /not-found-page */}
                    <Route path='/not-found-page' element={<NotFoundPage loadingPage ={false}/>}/>
                </Routes>
            </div>
        );
    }
}