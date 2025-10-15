'use client'
import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store'
import { counterSelect } from '@/slices/counter'

export const WidgetGrid = () => {
  const isCart = useAppSelector(counterSelect);

  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        label="Contador"
        href="/dashboard/counter"
        title={`${isCart}`}
        subTitle="Productos agregados"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
      />
    </div>
  )
}
