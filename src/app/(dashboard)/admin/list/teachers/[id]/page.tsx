import Announcements from "@/components/announcements";
import BigCalendar from "@/components/big-calendar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
      {/* Left */}
      <div className='w-full xl:w-2/3'>
        {/* Top */}
        <div className='flex flex-col lg:flex-row gap-4'>
          {/* Teacher big info card */}
          <div className='bg-oripovSky py-6 px-4 rounded-md flex-1 flex gap-4'>
            <div className='w-1/3'>
              <Image
                src='https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200'
                alt='Teacher image'
                width={144}
                height={144}
                className='w-36 h-36 rounded-full object-cover'
              />
            </div>
            <div className='w-2/3 flex flex-col gap-4 justify-between'>
              <h1 className='text-xl font-semibold'>Oripov Faxriddin</h1>
              <p className='text-sm text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                reprehenderit repudiandae consectetur facilis molestiae fugit.
              </p>
              <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                  <Image src='/blood.png' alt='' width={14} height={14} />
                  <span className=''>A+</span>
                </div>
                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                  <Image src='/date.png' alt='' width={14} height={14} />
                  <span className=''>February 2025</span>
                </div>
                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                  <Image src='/mail.png' alt='' width={14} height={14} />
                  <span className=''>fakhriddin@gmail.com</span>
                </div>
                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                  <Image src='/phone.png' alt='' width={14} height={14} />
                  <span className=''>+998906949416</span>
                </div>
              </div>
            </div>
          </div>
          {/* Teacher small info card */}
          <div className='flex-1 flex gap-4 justify-between flex-wrap'>
            {/* Card */}
            <div className='w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] bg-white p-4 rounded-md flex gap-4'>
              <Image
                src='/singleAttendance.png'
                alt='Attendance Logo'
                width={24}
                height={24}
                className='w-6 h-6'
              />
              <div className=''>
                <h1 className='text-xl font-semibold'>90%</h1>
                <p className='text-sm text-gray-400'>Attendance</p>
              </div>
            </div>
            {/* Card */}
            <div className='w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] bg-white p-4 rounded-md flex gap-4'>
              <Image
                src='/singleBranch.png'
                alt='Attendance Logo'
                width={24}
                height={24}
                className='w-6 h-6'
              />
              <div className=''>
                <h1 className='text-xl font-semibold'>5</h1>
                <p className='text-sm text-gray-400'>Branches</p>
              </div>
            </div>
            {/* Card */}
            <div className='w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] bg-white p-4 rounded-md flex gap-4'>
              <Image
                src='/singleLesson.png'
                alt='Attendance Logo'
                width={24}
                height={24}
                className='w-6 h-6'
              />
              <div className=''>
                <h1 className='text-xl font-semibold'>17</h1>
                <p className='text-sm text-gray-400'>Lessons</p>
              </div>
            </div>
            {/* Card */}
            <div className='w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] bg-white p-4 rounded-md flex gap-4'>
              <Image
                src='/singleClass.png'
                alt='Attendance Logo'
                width={24}
                height={24}
                className='w-6 h-6'
              />
              <div className=''>
                <h1 className='text-xl font-semibold'>6</h1>
                <p className='text-sm text-gray-400'>Classes</p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
          <h1 className=''>{`Teacher's schedule`}</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className='w-full xl:w-1/3 flex flex-col gap-4'>
        <div className='bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Shortcuts</h1>
          <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
            <Link
              className='p-3 rounded-md bg-oripovSkylight'
              href='/'>{`Teacher's Classes`}</Link>
            <Link
              className='p-3 rounded-md bg-oripovPurpleLight'
              href='/'>{`Teacher's Students`}</Link>
            <Link
              className='p-3 rounded-md bg-oripovYellowLight'
              href='/'>{`Teacher's Lessons`}</Link>
            <Link
              className='p-3 rounded-md bg-pink-50'
              href='/'>{`Teacher's Exams`}</Link>
            <Link
              className='p-3 rounded-md bg-oripovSkylight'
              href='/'>{`Teacher's Assignments`}</Link>
          </div>
        </div>
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
