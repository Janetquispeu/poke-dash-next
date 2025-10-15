'use client';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, counterSelect, initCounterState, substractOne } from '@/slices/counter';

const getApicounter = async () => {
  const data = await fetch('/api/counter').then(res => res.json());
  console.log(data, 'data');
  return data
}

export const CartCounter = () => {
  const count = useAppSelector(counterSelect);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApicounter()
    .then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch])

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
        <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
      </div>
    </>
  );
};
