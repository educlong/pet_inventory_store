import axios from 'axios'

// fetches all pet data from the server
export const FetchPets = async (setPets, setIsLoaded) =>
{
    try{
        const res = await axios.get('http://localhost:3001/api?act=getall')
        const result = await res.data
        let _pets = [];
        result.forEach(pet => _pets.push({...pet, isUpdate: false}) );
        setPets(_pets);
        setIsLoaded(true);
    }catch(ex){
        console.log(ex)
    }
}

// Inserts a pet with hardcoded data in the URL for each query parameter, we 
// could insert a pet with custom data by building a string like this:
//
// let url = "http://localhost:3001/api?act=add&animal=" + animal + ...
//
// fetch(url)
// .then( ... )...
//
export const AddPet = async (pet, setPets, setIsLoaded) =>
{
    try{
        await axios.get(`http://localhost:3001/api?act=add&animal=${pet.animal}&description=${pet.description}&age=${pet.age}&price=${pet.price}`)
        FetchPets(setPets, setIsLoaded);
    }catch(ex){
        console.log(ex)
    }
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
export const DeletePet = async (pet, setPets, setIsLoaded) =>
{
    try{
        await axios.get(`http://localhost:3001/api?act=delete&id=${pet.id}`)
        FetchPets(setPets, setIsLoaded);
    }catch(ex){
        console.log(ex)
    }
}

// Updates a pet in the pet inventory.  Again we use hardcoded data but 
// could build a custom fetch URL string.
export const UpdatePet = async (pet, setPets, setIsLoaded) =>
{
    try{
        await axios.get(`http://localhost:3001/api?act=update&id=${pet.id}&animal=${pet.animal}&description=${pet.description}&age=${pet.age}&price=${pet.price}`)
        FetchPets(setPets, setIsLoaded);
    }catch(ex){
        console.log(ex)
    }
}  
    
// Searches for pets in the pet inventory.  Again we use hardcoded data but
// we could build a custom fetch URL string.
export const SearchPet = async (word, setSearchResults) =>
{
    try{
        const res = await axios.get(`http://localhost:3001/api?act=search&term=${word.trim()!=='' ? word.trim() : ""}`)
        const result = await res.data
        let _pets = [];
        result.forEach(pet => _pets.push({...pet, isUpdate: false}) );
        setSearchResults(_pets);
    }catch(ex){
        console.log(ex)
    }
}
