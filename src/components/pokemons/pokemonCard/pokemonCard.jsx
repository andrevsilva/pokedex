import React , { Component } from 'react'
import '../index.css'
import api from '../../../services/Api.js'
import PokemonsInfo from '../pokemonsInfo/pokemonsInfo'

class PokemonCard extends Component{
    
    state = {
        pokemons: null
    }

    async componentDidMount(){
        const response = await api.get('')
        const pokemons = response.data
        this.setState({ pokemons: response.data['results'] })
    }

    render(){

        const { pokemons } = this.state

        return (
            <>
                {this.state.pokemons ? (
                    <div className="container">
                        {pokemons.map(pokemon =>(
                            <div className="card" key={pokemon.name}>
                                
                                <p>
                                    <PokemonsInfo 
                                        key={pokemon.name}
                                        name={pokemon.name}
                                        url={pokemon.url}
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
}

export default PokemonCard;