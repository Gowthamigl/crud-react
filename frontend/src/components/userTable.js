import React from 'react';
import { useTable } from 'react-table';

function UserTable({ users ,onEdit,onDelete}) {
  const columns = React.useMemo(
    () => [
      {
        Header: '_id',
        accessor: '_id',
      },
      {
        Header: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'email',
        accessor: 'email',
      },
      {
        Header: 'Actions',
        Cell: ({ row }) => (
          <div>
            <button onClick={() => onEdit(row.original)}>Edit</button>
            <button onClick={() => onDelete(row.original)}>Delete</button>
          </div>
        ),
      },
    ],
    [onEdit,onDelete]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: users });

  return (
    <table {...getTableProps()} style={{ border: '5px solid black' }}>
      <thead style={{color:"springgreen"}}>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} style={{ padding: '5px' }}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} style={{color:"red"}}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} style={{ padding: '20px' }}>
                  {cell.render('Cell')}
                </td>
                
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UserTable;