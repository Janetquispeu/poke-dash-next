'use client';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subTitle?: string;
  label?: string;
  index?: number;
  icon?: React.ReactNode;
}

export const SimpleWidget = ({
label,
title,
icon,
index = 0,
subTitle
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
      className="bg-white shadow-xl p-3 sm:min-w-[25%] w-full min-w-full  rounded-2xl border-1 border-gray-50 my-2 w-70"
    >
      <div className="flex flex-col w-full min-w-[0]">
        {label && (
          <div>
            <h2 className="font-bold text-gray-600 text-center">{label}</h2>
          </div>
        )}
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            {icon}
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{title}</h4>
              <p className="text-xs text-gray-500 min-w-[80px]">{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
};