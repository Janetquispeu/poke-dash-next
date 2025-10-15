import { SimplePokemons } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
  [key: string]: SimplePokemons
}

const getInitialState = (): PokemonsState => {
  const favorites = localStorage.getItem('favorite-pokemons') ?? '{}';

  return JSON.parse(favorites);
};

const initialState: PokemonsState = {
  ...getInitialState()
  // '1': { id: '1', name: 'bulbasaur' },
  // '3': { id: '3', name: 'venusaur' },
  // '5': { id: '5', name: 'Charmeleon' }
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemons>) => {
      const pokemon = action.payload;
      const { id } = pokemon;
      console.log(state, 'state');
      if (!!state[id]) {
        delete state[id];
        return;
      }

      state[id] = pokemon;
    }
  }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer