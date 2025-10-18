'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initCounterState, substractOne } from '@/slices/counter';

const getApicounter = async () => {
  const data = await fetch('/api/counter').then(res => res.json());
  return data
}

export const CartCounter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   getApicounter()
  //   .then(({ count }) => dispatch(initCounterState(count)));
  // }, [dispatch])

  return (
    <>
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-center gap-4 w-64 h-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >        
        <motion.span
          key={count}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-4xl font-bold text-indigo-500"
        >
          {count}
        </motion.span>
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
      </motion.div>
    </>
  );
};
