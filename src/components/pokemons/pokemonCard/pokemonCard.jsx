import React , { useEffect , useState } from 'react'
import '../index.css'
import api from '../../../services/Api.js'
import PokemonsInfo from '../pokemonsInfo/pokemonsInfo'

export default function PokemonCard() {
    const [pokemons , setPokemons ] = useState([]);
    

    useEffect(() => {
        api.get('')
            .then(response => {
                setPokemons(response.data['results'])
                
               console.log(pokemons)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])

    return (
        <>
            {pokemons ? (
                <div className="container">
                    {pokemons.map(pokemon =>(
                        <div className="card" key={pokemon.name}>
                            
                            <p>
                                <PokemonsInfo 
                                    key={pokemon.name}
                                    name={pokemon.name}
                                    url={pokemon.url}
                                    pokemonIndex={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                                />
                            </p>
                        </div>
                    ))}
                </div> 
            ) : (
                <h1>Carregando os pokemons</h1>
            )}
        </>
    )
    
}
