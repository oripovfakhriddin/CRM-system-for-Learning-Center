"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolar 1",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolar sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolar 2",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolar sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolar 3",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolar sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "Lorem ipsum dolar 4",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolar sit amet, consectetur adipiscing elit.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white rounded-md p-4'>
      <Calendar onChange={onChange} value={value} />
      <div className='flex flex-col gap-4'>
        {/* TITLE */}
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-semibold my-4'>Events</h1>
          <Image src='/moreDark.png' alt='More logo' width={20} height={20} />
        </div>
        {events.map((event) => {
          return (
            <div
              key={event.id}
              className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-oripovSky even:border-t-oripovPurple'>
              <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                <span className='text-xs text-gray-300'>{event.time}</span>
              </div>
              <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;
