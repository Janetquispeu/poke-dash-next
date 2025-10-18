import { SimplePokemons } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
  favorites : {
    [key: string]: SimplePokemons
  },
  total: number
}

const initialState: PokemonsState = {
  favorites: {},
  total: 0
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setTotalPokemon: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setFavoritePokemons: (state, action: PayloadAction<{ [key: string]: SimplePokemons }>) => {
      state.favorites = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<SimplePokemons>) => {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      }

      state.favorites[id] = pokemon;
      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    }
  }
});

export const { toggleFavorite, setFavoritePokemons, setTotalPokemon } = pokemonsSlice.actions

export default pokemonsSlice.reducer