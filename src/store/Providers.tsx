'use client'

import React, { useEffect } from 'react'
import { store } from '.'
import { Provider } from 'react-redux'
import { setFavoritePokemons } from '@/slices/pokemons';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') || '{}');
    store.dispatch(setFavoritePokemons(favorites));
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
