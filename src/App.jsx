import React , { useEffect } from 'react'

import Header from './components/header/Header'
import PokemonCard  from './components/pokemons/pokemonCard/pokemonCard'
import PokemonDetail from './components/pokemons/pokemonsDetails/pokemonsDetails'
import Footer from './components/footer/Footer'
import { connect } from 'react-redux'
import { pokemonDetail } from './store/actions'
import { Route } from "react-router-dom"

import "./App.css"

function App(props) {

    useEffect(() => {
        props.pokemonDetail("https://pokeapi.co/api/v2/pokemon/");
    }, []);

    return (
    <div className="App">
        <Header>
            
        </Header>

        <Route exact path="/">
            <PokemonCard />
        </Route>

        <Route exact path={`/${props.pokemon.name}`}>
            <PokemonDetail />
        </Route>

        <Footer />
    </div>)
}

const mstp = (state) => {
    return {
      isLoading: state.pkr.isLoading,
      isError: state.pkr.isError,
      errorMsg: state.pkr.error,
      pokemon: state.pkr.pokemon
    };
};

export default connect(mstp , {pokemonDetail}) (App)