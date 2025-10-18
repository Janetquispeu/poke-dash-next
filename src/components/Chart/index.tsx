'use client';
import { useAppSelector } from '@/store';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const Chart = () => {
  const isCart = useAppSelector((state) => state.counter?.count);
  const favorites = useAppSelector(state => state.pokemons.favorites);
  const newFavorites = Object.values(favorites);

  const data = [
    {
      name: 'Pókemones atrapados',
      value: isCart,
    },
    {
      name: 'Pókemones en total',
      value: 151,
    },
    {
      name: 'Pókemones favoritos',
      value: newFavorites.length
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm m-2 h-full">
      <h2 className="text-lg font-semibold mb-2">Resumen general</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
