import React from 'react';
import { SimplePokemons } from '@/pokemons';
import PokemonCard from './PokemonCard';
import { IoHeartOutline } from 'react-icons/io5';

interface Props {
  pokemons: SimplePokemons[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <>
      {
        pokemons.length === 0 ? <NoFavorites /> : (
          <div className="flex flex-wrap gap-10 items-center justify-between">
            {pokemons.map((pokemon) => {
              return <PokemonCard key={pokemon.id} pokemon={pokemon} />
            })}
          </div>
        )
      }
    </>
  )
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className='text-red-500' />
      <span>No hay favoritos</span>
    </div>
  )
};