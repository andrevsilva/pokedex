import React , { Component } from 'react'
import '../index.css'

 export default function PokemonsInfo(props) {
    
    return (
            <>
                <span>{props.pokemonIndex}</span>
                <h5>{props.name}</h5>
                <img src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${props.pokemonIndex}.png?raw=true`} alt={props.name} />
            </>
        )
}
