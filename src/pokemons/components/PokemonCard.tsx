'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SimplePokemons } from "../interfaces/simple-pokemons";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/slices/pokemons";

interface Props {
  pokemon: SimplePokemons;
}

const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector(state => !!state.pokemons.favorites[id]);
  const dispatch = useAppDispatch();
 
  const handleToggle = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className="right-0 w-60 shadow-md hover:shadow-xl transition-all">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <div className="w-[100] h-[100] relative">
            <Image
              key={id}
              alt={name}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              priority={false}
              fill
            />
          </div>
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <div className="mt-5">
            <Link href={`pokemon/${name}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Ir al detalle
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div 
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
            onClick={handleToggle}
          >
            <div className="text-red-600">
              {isFavorite ? <IoHeart size={20} /> : <IoHeartOutline size={20} />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? 'Es favorito' : 'No es favorito'}
              </p>
              <p className="text-xs text-gray-500">Click para cambiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
