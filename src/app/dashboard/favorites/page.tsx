import { Metadata } from "next";
import { Favorites } from "@/pokemons/components/Favorites";

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Listado de pókemons',
};

export default async function FavoritesPage() {
  return (
    <Favorites />
  );
}