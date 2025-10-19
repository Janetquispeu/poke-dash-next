import { Metadata } from "next";
import { Title } from "@/components";
import { PokemonGrid, PokemonsResponse, SimplePokemons } from "@/pokemons";

export const metadata: Metadata = {
  title: 'Listado de pókemons',
  description: 'Listado de pókemons',
};

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemons[]> => {
  const res: PokemonsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon?limit=${limit}&offset=${offset}`)
    .then((res) => res.json());

    const pokemons = res.results.map((pokemon) => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name
    }));

    // throw new Error('Esto es un error que no debería de suceder')
    return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <Title text="Listado de Pokémones" subText={`Total: ${pokemons.length} pokemon(s)`} />
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}