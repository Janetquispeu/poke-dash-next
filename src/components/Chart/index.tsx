'use client';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '@/store';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const Chart = () => {
  const SIZE_MONITOR = 1440;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [chartHeight, setChartHeight] = useState(0);
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

  useEffect(() => {
    const updateChartHeight = () => {
      let newHeight = 600;
      const WINDOW_WIDTH = window.innerWidth;

      if (WINDOW_WIDTH > SIZE_MONITOR) {
        if (containerRef.current) {
          newHeight = containerRef.current.clientHeight;
        }
      }
      setChartHeight(newHeight);
    };

    updateChartHeight();
    window.addEventListener('resize', updateChartHeight);
    return () => window.removeEventListener('resize', updateChartHeight);
  }, []);

  console.log(chartHeight, 'chartHeight');
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm h-[calc(100%-245px)]" ref={containerRef}>
      <h2 className="text-lg font-semibold mb-2">Resumen general</h2>
      <ResponsiveContainer width="100%" height={chartHeight}>
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
