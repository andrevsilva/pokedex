const initialState = {
    isLoading: false,
    isError: false,
    error: "",
    pokemons: [],
    prev: "",
    next: "",
    pokemon: []
  };
  
  export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOADING":
        return {
          ...state,
          isLoading: true
        };
      case "LOADING_SUCC":
        return {
          ...state,
          isLoading: false,
          isError: false,
          error: "",
          pokemons: action.payload.results,
          prev: action.payload.prev,
          next: action.payload.next
        };
      case "LOADING_ERR":
        return {
          ...state,
          isLoading: false,
          isError: true,
          error: action.payload.message
        };
      case "POKEMON_FETCH":
        return {
          ...state,
          isLoading: true
        };
      case "POKEMON_FETCH_SUCC":
        return {
          ...state,
          isLoading: false,
          pokemon: action.payload
        };
      case "POKEMON_FETCH_ERR":
        return {
          ...state,
          isLoading: false,
          isError: true,
          error: action.payload.message
        };
      case "UPDATE_LOADING":
        return {
          ...state,
          isError: true,
          error: "ALGO DEU ERRADO"
        };
      default:
        return state;
    }
  };
  