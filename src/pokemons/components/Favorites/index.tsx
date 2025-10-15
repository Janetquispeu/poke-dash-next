'use client';
import React from 'react';
import { PokemonGrid } from '../PokemonGrid';
import { useAppSelector } from '@/store';

export const Favorites = () => {
  const pokemons = useAppSelector(state => state.pokemons);
  const newPokemons =Object.values(pokemons);
  console.log(newPokemons, 'newPokemons');

  return (
    <div className="flex flex-col p-10">
      <span className="text-5xl my-2">Pokémons favoritos</span>
      <PokemonGrid pokemons={newPokemons} />
    </div>
  )
}
