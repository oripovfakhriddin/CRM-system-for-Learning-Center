import React from "react";
import Parent from "@/types/parent";
import Teacher from "@/types/teacher";
import Subject from "@/types/subject";
import Class from "@/types/class";
import Lesson from "@/types/lesson";
import Exam from "@/types/exam";
import Assignment from "@/types/assignment";

const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data:
    | Teacher[]
    | Student[]
    | Parent[]
    | Subject[]
    | Class[]
    | Lesson[]
    | Exam[]
    | Assignment[];
}) => {
  return (
    <table className='w-full mt-4 '>
      <thead className=''>
        <tr className='text-left text-gray-500 text-sm'>
          {columns.map((col) => (
            <th className={col.className} key={col.accessor}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className=''>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
