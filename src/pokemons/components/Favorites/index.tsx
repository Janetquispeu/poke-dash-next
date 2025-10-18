'use client';
import React, { useEffect, useState } from 'react';
import { PokemonGrid } from '../PokemonGrid';
import { useAppSelector } from '@/store';
import { Title } from '@/components';

export const Favorites = () => {
  const favorites = useAppSelector(state => state.pokemons.favorites);
  const [pokemons, setPokemons] = useState(Object.values(favorites));

  useEffect(() => {
    setPokemons(Object.values(favorites));
  }, [favorites]);

  return (
    <div className="flex flex-col">
      <Title text="Tus Pokémones favoritos" subText={`Total: ${pokemons.length} pokemon(s)`} />
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
