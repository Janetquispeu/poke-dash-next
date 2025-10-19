'use client';
import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { IoCubeOutline, IoGlobeOutline, IoHeartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store'

export const WidgetGrid = () => {
  const isCart = useAppSelector((state) => state.counter?.count);
  const favorites = useAppSelector(state => state.pokemons.favorites);
  const newFavorites = Object.values(favorites);

  const data = [
    {
      label: 'Pókemones atrapados',
      title: String(isCart),
      subTitle: 'Capturados en tus aventuras',
      icon: <IoCubeOutline size={70} className="text-blue-600" />
    },
    {
      label: 'Pókemones en total',
      title: '151',
      subTitle: 'Registrados en la Pokédex',
      icon: <IoGlobeOutline size={70} className="text-blue-600" />
    },
    {
      label: 'Pókemones favoritos',
      title: `${newFavorites.length}`,
      subTitle: 'Elegidos por ti',
      icon: <IoHeartOutline size={70} className="text-blue-600" />
    }
  ];

  return (
    <div className="flex p-[10px 0] gap-[10px] justify-between w-full">
      {data.map((widget, index) => (
        <SimpleWidget
          key={index}
          index={index}
          label={widget.label}
          title={widget.title}
          subTitle={widget.subTitle}
          icon={widget.icon}
        />
      ))}
    </div>
  )
}
