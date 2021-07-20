import React from "react"
import { connect } from "react-redux"

function pokemonsDetails(props) {
    return (
        <div className="container">
          <div className="card">
              <img src={props.pokemon.sprites.front_default} />
              <h3>{props.pokemon.name}</h3>
          </div>
        </div>
    )
}

const mstp = (state) => {
    return {
      pokemon: state.pkr.pokemon
    };
  };
  
export default connect(mstp, {})(pokemonsDetails);