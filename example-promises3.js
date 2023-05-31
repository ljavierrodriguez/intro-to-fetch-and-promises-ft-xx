/*  
Fetching Data:

// promise

fetch() 


*/
/**
 * method string GET, POST, PUT, DELETE
 * body string POST, PUT
 * headers object { 'Content-Type': 'application/json'}
 * 
 * 
 * @param string 
 * @param object (optional) { method: 'GET', body: }
*/
const getPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon", {})
        .then((response) => {
            console.log(response);

            if (response.status === 404) throw new Error("Pagina no encontrada");

            return response.json() // transforma los datos para ser manipulados
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error.message)
        })
}

const getPokemonsAsync = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon", {}) // {} es optional
        
        if (response.status === 404) throw new Error("Pagina no encontrada");
        
        const data = await response.json();
        console.log(data);
    
    } catch (error) {
        console.log(error.message)
    }
}


fetch("", {})
    .then((response) => {}) // Respuesta del Servidor
    .then((data) => {}) // Data a consultar
    .catch((error) => {}) // Cualquier error atrapado