import React from "react";
import { Metadata } from "next";
import Announcements from "@/components/announcements";
import AttendanceChart from "@/components/attendance-chart";
import CountChart from "@/components/count-chart";
import EventCalendar from "@/components/event-calendar";
import FinanceChart from "@/components/finance-chart";
import UserCard from "@/components/user-card";

export const metadata: Metadata = {
  title: "Admin | Stem LC",
  description: "Next.js CRM was made Fakhriddin Oripov",
};

const AdminPage = () => {
  return (
    <div className='flex p-4 gap-4 flex-col md:flex-row'>
      {/* Left */}
      <div className=' w-full lg:w-2/3 flex flex-col gap-8'>
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='students' />
          <UserCard type='teachers' />
          <UserCard type='parents' />
          <UserCard type='staffs' />
        </div>
        {/* Middle CHARTS */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* Count charts */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          {/* Attendence charts */}
          <div className='w-full lg:w-2/3 h-[450px]'>
            <AttendanceChart />
          </div>
        </div>
        {/* Bottom CHARTS */}
        <div className='w-full h-[500px]'>
          <FinanceChart />
        </div>
      </div>
      {/* Right */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
