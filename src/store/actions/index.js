import axios from "axios"

export const pokemonDetail = (url) => {
    return (dispatch) => {
        dispatch({ type: "LOADING" })
         axios
            .get(url)
            .then((response) =>{
                dispatch({ type: "LOADING_SUCC" , payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: "LOADING_ERR" , payload: error})
            })
    }
}

export const pokemonNameDetail = (name) => {
    return (dispatch) => {
        dispatch({ type: "POKEMON_FETCH" })
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then((response) => {
                    dispatch({ type: "POKEMON_FETCH_SUCC" , payload: response.data })
                })
                .catch((error) => {
                    dispatch({ type: "POKEMON_FETCH_ERRO" , payload: error })
                })

    }
}