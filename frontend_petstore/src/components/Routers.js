import { useEffect, useState } from 'react';
import { Routes ,Route, Navigate } from 'react-router-dom';
import About from './about/About';
import Home from './Home';
import Inventory from './Inventory';
import Search from './Search';
import NotFoundPage from './NotFoundPage'
import {FetchPets, AddPet, DeletePet, UpdatePet, SearchPet} from './apis/petsAPI'

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
  
    // use fetchPets as an effect with an empty array as a 2nd argument, which 
    // means fetchPets will ONLY be called when the component first mounts
    // useEffect(fetchPets, []);
    useEffect(() => FetchPets(setPets, setIsLoaded), []);

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
                            /**Call addPet, deletePet and updatePet functions into Inventory component */
                            addPet = {(pet) => AddPet(pet, setPets, setIsLoaded)}  
                            deleted={(pet)=> DeletePet(pet, setPets, setIsLoaded)}
                            updates={(pet)=> UpdatePet(pet, setPets, setIsLoaded)}/>}/>
                    <Route path='/search'                    /**route to /search */
                        element={<Search 
                            searchResults = {searchResults}
                            pets = {pets} 
                            search={(word) => SearchPet(word, setSearchResults)} />}/>    {  /**Call searchPet function into Search component */}
                    <Route path='/about' element={<About/>}/>       {/**route to /about */}
                    <Route path='*' element={<Navigate to='/not-found-page'/>}/>    {/**route to /not-found-page */}
                    <Route path='/not-found-page' element={<NotFoundPage loadingPage ={false}/>}/>
                </Routes>
            </div>
        );
    }
}