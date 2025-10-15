'use client'

import React from 'react'
import { store } from '.'
import { Provider } from 'react-redux'

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
