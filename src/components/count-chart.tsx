"use client";

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 1700,
    fill: "white",
  },
  {
    name: "Girls",
    count: 456,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 1234,
    fill: "#C3EBFA",
  },
];

import React from "react";
import Image from "next/image";

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      {/* TITLE */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src='/moreDark.png' alt='More logo' width={20} height={20} />
      </div>
      {/* CHART */}
      <div className='relative w-full h-3/4'>
        <ResponsiveContainer>
          <RadialBarChart
            cx='50%'
            cy='50%'
            innerRadius='40%'
            outerRadius='100%'
            barSize={32}
            data={data}>
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey='count'
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Image
            src='/maleFemale.png'
            alt='Boys and Girls Image '
            width={50}
            height={50}
          />
        </div>
      </div>
      {/* BOTTOM */}
      <div className='flex justify-center gap-16'>
        <div className=' flex flex-col gap-1'>
          <div className='w-5 h-5 bg-oripovSky rounded-full' />
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
        </div>
        <div className=' flex flex-col gap-1'>
          <div className='w-5 h-5 bg-oripovYellow rounded-full' />
          <h1 className='font-bold'>456</h1>
          <h2 className='text-xs text-gray-300'>Girls (55%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
