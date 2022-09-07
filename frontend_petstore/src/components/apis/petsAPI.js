// fetches all pet data from the server
export function FetchPets(setPets, setIsLoaded)
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

// Inserts a pet with hardcoded data in the URL for each query parameter, we 
// could insert a pet with custom data by building a string like this:
//
// let url = "http://localhost:3001/api?act=add&animal=" + animal + ...
//
// fetch(url)
// .then( ... )...
//
export function AddPet(pet, setPets, setIsLoaded)
{
    fetch(`http://localhost:3001/api?act=add&animal=${pet.animal}&description=${pet.description}&age=${pet.age}&price=${pet.price}`)
    .then(res => res.json())
    .then(
    (result) => {
        FetchPets(setPets, setIsLoaded);
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
export function DeletePet(pet, setPets, setIsLoaded)
{
    fetch(`http://localhost:3001/api?act=delete&id=${pet.id}`)
    .then(res => res.json())
    .then(
    (result) => {
        FetchPets(setPets, setIsLoaded);
    })    
}

// Updates a pet in the pet inventory.  Again we use hardcoded data but 
// could build a custom fetch URL string.
export function UpdatePet(pet, setPets, setIsLoaded)
{
    fetch(`http://localhost:3001/api?act=update&id=${pet.id}&animal=${pet.animal}&description=${pet.description}&age=${pet.age}&price=${pet.price}`)
    .then(res => res.json())
    .then(
    (result) => {
        FetchPets(setPets, setIsLoaded);
    });
}  
    
// Searches for pets in the pet inventory.  Again we use hardcoded data but
// we could build a custom fetch URL string.
export function SearchPet(word, setSearchResults)
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
