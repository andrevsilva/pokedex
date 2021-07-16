import React from 'react'

import Header from './components/header/Header'
import PokemonCard  from './components/pokemons/pokemonCard/pokemonCard'
import Footer from './components/footer/Footer'
import "./App.css"

export default props =>
    <div className="App">
        <Header />
        <PokemonCard />
        <Footer />
    </div>