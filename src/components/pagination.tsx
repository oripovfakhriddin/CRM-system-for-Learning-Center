import React from "react";

const Pagination = () => {
  return (
    <div className='p-4 flex flex-wrap items-center justify-between text-gray-500 '>
      <button
        disabled
        className='px-4 py-2 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>
        Prev
      </button>
      <div className='flex flex-wrap items-center gap-2 text-sm'>
        <button className='px-2 rounded-sm '>1</button>
        <button className='px-2 rounded-sm '>2</button>
        <button className='px-2 rounded-sm bg-oripovSky'>3</button>
        <button className='px-2 rounded-sm '>4</button>
        ...
        <button className='px-2 rounded-sm '>13</button>
        <button className='px-2 rounded-sm '>14</button>
        <button className='px-2 rounded-sm '>15</button>
      </div>
      <button className='px-4 py-2 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>
        Next
      </button>
    </div>
  );
};

export default Pagination;
