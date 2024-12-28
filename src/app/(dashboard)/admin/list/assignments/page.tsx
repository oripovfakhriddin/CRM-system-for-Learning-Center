import Pagination from "@/components/pagination";
import Table from "@/components/table";
import TableSearch from "@/components/table-search";
import { assignmentsData, role } from "@/lib/data";
import Assignment from "@/types/assignment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const columns = [
  { header: "Subject Name", accessor: "name" },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "DueDate",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const AllAssignmentsPage = () => {
  const renderRow = (item: Assignment) => (
    <tr
      className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-oripovPurpleLight'
      key={item.id}>
      <td className='flex items-center gap-4 p-4'>{item.subject} </td>
      <td>{item.class}</td>
      <td className='hidden md:table-cell'>{item.teacher}</td>
      <td className='hidden md:table-cell'>{item.dueDate}</td>
      <td className=''>
        <div className='flex items-center gap-2'>
          <Link href={`/admin/list/teachers/${item.id}`}>
            <button className='w-7 h-7 rounded-full flex items-center justify-center bg-oripovSky'>
              <Image src='/edit.png' alt='Edit icon' width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className='w-7 h-7 rounded-full flex items-center justify-center bg-oripovPurple'>
              <Image
                src='/delete.png'
                alt='Delete icon'
                width={16}
                height={16}
              />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* Top */}
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <h1 className='text-lg font-semibold mb-4 md:mb-0'>All assignments</h1>
        <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
          <TableSearch />
          <div className='flex items-center gap-4 self-end'>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-oripovYellow'>
              <Image
                src='/filter.png'
                alt='Filter logo'
                width={14}
                height={14}
              />
            </button>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-oripovYellow'>
              <Image src='/sort.png' alt='Sort logo' width={14} height={14} />
            </button>
            {role === "admin" && (
              <button className='w-8 h-8 flex items-center justify-center rounded-full bg-oripovYellow'>
                <Image src='/plus.png' alt='Plus logo' width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default AllAssignmentsPage;
