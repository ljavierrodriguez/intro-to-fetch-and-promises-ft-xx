import React, { useEffect, useState } from 'react'
import ItemCharacter from './ItemCharacter';

const Characters = () => {

    const [pokemons, setPokemons] = useState(null);

    useEffect(() => {
        getPokemons(`https://pokeapi.co/api/v2/pokemon`);
        getPokemonsAsync(`https://pokeapi.co/api/v2/pokemon`);
    }, [])

    const getPokemons = (url) => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                //console.log(response);
                //console.log(response.status)
                if (response.status === 404) throw new Error('Pagina no encontrada! por favor revise el url');
                return response.json();
            })
            .then((data) => {
                console.log(data)
                setPokemons(data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const getPokemonsAsync = async (url) => {
        try {
            const response = await fetch(url);

            if (response.status === 404) throw new Error('Pagina no encontrada! por favor revise el url');

            const data = await response.json();
            setPokemons(data);

        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div>Characters</div>
            <ul className='list-group'>
                {
                    pokemons !== null &&
                    pokemons?.results.length > 0 &&
                    pokemons.results.map((poke) => {
                        return (
                            <ItemCharacter name={poke.name} />
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Characters