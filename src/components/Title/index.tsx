import React from 'react';
import Link from 'next/link';

export const Title = ({ text, subText = '', icon }: { text: string; subText?: string; icon?: React.ReactNode }) => {
  return (
    <div className='ml-4'>
      <div className='flex items-center gap-2'>

        {icon && (
          <Link href="/dashboard/pokemons">{icon}</Link>
        )}
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{text}</h1>
      </div>
      <span className="mt-1 text-gray-500 text-sm">{subText}</span>
    </div>
  );
};
