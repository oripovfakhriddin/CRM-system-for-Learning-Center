import React from "react";

const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
      {/* TITLE */}
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold'>Announcements</h1>
        <span className='text-xs text-gray-400'>View all</span>
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <div className='bg-oripovSkylight rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem ipsum dolor sit.</h2>
            <span className='text-xs text-gray-400 bg-white rounded-md p-1'>
              2025-01-01
            </span>
          </div>
          <p className='text-sm text-gray-400 mt-1'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            molestiae officiis sint expedita asperiores pariatur blanditiis
            neque omnis, cum hic, officia rem voluptatum, natus laborum earum
            quam aliquid quisquam. Aspernatur!
          </p>
        </div>
        <div className='bg-oripovPurpleLight rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem ipsum dolor sit.</h2>
            <span className='text-xs text-gray-400 bg-white rounded-md p-1'>
              2025-01-01
            </span>
          </div>
          <p className='text-sm text-gray-400 mt-1'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            molestiae officiis sint expedita asperiores pariatur blanditiis
            neque omnis, cum hic, officia rem voluptatum, natus laborum earum
            quam aliquid quisquam. Aspernatur!
          </p>
        </div>
        <div className='bg-oripovYellowLight rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem ipsum dolor sit.</h2>
            <span className='text-xs text-gray-400 bg-white rounded-md p-1'>
              2025-01-01
            </span>
          </div>
          <p className='text-sm text-gray-400 mt-1'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            molestiae officiis sint expedita asperiores pariatur blanditiis
            neque omnis, cum hic, officia rem voluptatum, natus laborum earum
            quam aliquid quisquam. Aspernatur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
