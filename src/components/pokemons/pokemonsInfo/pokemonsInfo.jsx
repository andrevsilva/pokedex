import React , { Component } from 'react'
import '../index.css'

class PokemonsInfo extends Component{
    
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
    }

    componentDidMount(){
        const { name , url } = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

        this.setState({
            name,
            imageUrl,
            pokemonIndex,
        })
    }

    render(){
        return (
            <>
                <span>{this.state.pokemonIndex}</span>
                <h5>{this.state.name}</h5>
                <img src={this.state.imageUrl} alt={this.state.name} />
            </>
        )
    }
}

export default PokemonsInfo;