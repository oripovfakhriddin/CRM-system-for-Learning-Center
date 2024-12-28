import React from "react";
import { Metadata } from "next";
import Announcements from "@/components/announcements";
import BigCalendar from "@/components/big-calendar";

export const metadata: Metadata = {
  title: "Parent | Stem LC",
  description: "Next.js CRM was made Fakhriddin Oripov",
};

const ParentPage = () => {
  return (
    <div className='flex-1 flex  p-4 gap-4 flex-col xl:flex-row'>
      {/* Left */}
      <div className=' w-full xl:w-2/3 '>
        <div className='h-full bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Schedule (Faxriddin)</h1>
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

export default ParentPage;
