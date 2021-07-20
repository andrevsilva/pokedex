import React from 'react'
//import axios from "axios"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { pokemonNameDetail } from "../../../store/actions"
import '../index.css'
//import api from '../../../services/Api.js'
import PokemonsInfo from '../pokemonsInfo/pokemonsInfo'

function PokemonCard(props) {
    {/*const [pokemons , setPokemons ] = useState([]);
    

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0')
            .then(response => {
                setPokemons(response.data['results'])
                
               console.log(pokemons)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])*/}

    return (
        <>
            <div className="container">

                {props.isError ? <h1>{props.errorMsg}</h1> : <></>}

                {props.pokemons && props.pokemons.map((pokemon) => {
                    return (
                        <>
                            <Link to={`/${pokemon.name}`} key={pokemon.name}>
                                <div 
                                    className="card" 
                                    key={pokemon.name} 
                                    onClick={() => props.pokemonNameDetail(pokemon.name)}
                                >
                                    
                                    <p>
                                        <PokemonsInfo 
                                            key={pokemon.name}
                                            name={pokemon.name}
                                            url={pokemon.url}
                                            pokemonIndex={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
                                        />
                                    </p>
                                </div>
                            </Link>
                        </>
                    )
                })}
            </div> 
        </>
    )
    
}

const mstp = (state) => {
    return {
        isLoading: state.pkr.isLoading,
        isError: state.pkr.isError,
        errorMsg: state.pkr.error,
        pokemons: state.pkr.pokemons
    }
}

export default connect(mstp , { pokemonNameDetail }) (PokemonCard)