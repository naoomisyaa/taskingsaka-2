import React from 'react';

interface ColumnDef<T> {
  title: string;
  field?: keyof T;
  render?: (rowData: T) => React.ReactNode;
}

interface TableProps<T> {
  columnDefs: ColumnDef<T>[];
  data: TableRow<T>;
}

function Table<T>({ columnDefs, data }: TableProps<T>) {
  return (
    <table className="min-w-full border-collapse bg-white">
      <thead>
        <tr>
          {columnDefs.map((col, index) => (
            <th key={index} className="px-4 py-2 border border-gray-300">
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.data.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b border-gray-300">
            {columnDefs.map((col, colIndex) => (
              <td key={colIndex} className="px-4 py-2 text-center border border-gray-300">
                {col.render ? col.render(row) : row[col.field as keyof T]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;