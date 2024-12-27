import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className='rounded-2xl odd:bg-oripovPurple even:bg-oripovYellow p-4 flex-1 min-w-[130px]'>
      <div className='flex items-center justify-between gap-2'>
        <span className='text-[10px] bg-white px-2 py-1 text-green-600 rounded-full'>
          2024/25
        </span>
        <Image
          src='/more.png'
          alt='More Logo'
          width={20}
          height={20}
          className=''
        />
      </div>
      <h1 className='text-2xl font-semibold my-4'>1234</h1>
      <h1 className='capitalize text-sm font-medium text-gray-500'>{type}</h1>
    </div>
  );
};

export default UserCard;
