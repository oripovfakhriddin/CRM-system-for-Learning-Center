import Announcements from "@/components/announcements";
import BigCalendar from "@/components/big-calendar";
import EventCalendar from "@/components/event-calendar";
import React from "react";

const TeacherPage = () => {
  return (
    <div className='flex-1 flex  p-4 gap-4 flex-col xl:flex-row'>
      {/* Left */}
      <div className=' w-full xl:w-2/3 '>
        <div className='h-full bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
