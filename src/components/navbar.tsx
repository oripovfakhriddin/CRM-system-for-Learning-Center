import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* Search Bar */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src='/search.png' alt='Search Logo' width={14} height={14} />
        <input
          type='text'
          placeholder='Search...'
          className='w-[200px] p-2 bg-transparent outline-none'
        />
      </div>
      {/* User Bar */}
      <div className='flex items-center gap-6 w-full justify-end'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src='/message.png' alt='Message Logo' width={20} height={20} />
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image
            src='/announcement.png'
            alt='Message Logo'
            width={20}
            height={20}
          />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>
            1
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>John Doe</span>
          <span className='text-gray-500 text-right'>Admin</span>
        </div>
        <div className='rounded-full overflow-hidden'>
          <Image src='/avatar.png' alt='Avatar logo' width={36} height={36} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
