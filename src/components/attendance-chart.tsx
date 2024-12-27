"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 120,
    absent: 150,
  },
  {
    name: "Tue",
    present: 140,
    absent: 160,
  },
  {
    name: "Wed",
    present: 180,
    absent: 320,
  },
  {
    name: "Thu",
    present: 230,
    absent: 250,
  },
  {
    name: "Fri",
    present: 150,
    absent: 160,
  },
  {
    name: "Sat",
    present: 220,
    absent: 210,
  },
  {
    name: "Sun",
    present: 120,
    absent: 320,
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
      {/* TITLE */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src='/moreDark.png' alt='More logo' width={20} height={20} />
      </div>
      {/* CHART */}
      <ResponsiveContainer width='100%' height='90%'>
        <BarChart width={500} height={300} data={data} barSize={14}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#ddd' />
          <XAxis
            dataKey='name'
            axisLine={false}
            tick={{ fill: "#D1D5DB" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#D1D5DB" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align='left'
            verticalAlign='top'
            wrapperStyle={{
              paddingTop: "20px",
              paddingBottom: "40px",
            }}
          />
          <Bar
            dataKey='present'
            fill='#FAE27C'
            legendType='circle'
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey='absent'
            fill='#C3EBFA'
            legendType='circle'
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
