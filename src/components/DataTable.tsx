import React, { useState } from 'react';
import { DataTableProps, SortDirection } from '../interface/DataTableInterface';

function DataTable<T>({ columns, data }: DataTableProps<T>) {
    const [sortConfig, setSortConfig] = useState<{ key?: keyof T; direction: SortDirection }>({
        key: undefined,
        direction: 'asc',
    });

    const handleSort = (key: keyof T) => {
        let direction: SortDirection = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = React.useMemo(() => {
        if (!sortConfig.key) return data;

        return [...data].sort((a, b) => {
            const key = sortConfig.key as keyof T;  // Aseguramos que no sea undefined

            const aValue = a[key];
            const bValue = b[key];

            if (aValue === bValue) return 0;

            if (sortConfig.direction === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });
    }, [data, sortConfig]);

    return (
        <div className='table-responsive rounded'>
            <table className="table table-striped table-bordered rounded">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                style={{ width: col.width }}
                                onClick={() => col.sortable && col.accessor && handleSort(col.accessor)}
                            >
                                {col.header}
                                {col.sortable && sortConfig.key === col.accessor && (
                                    <span>{sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽'}</span>
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} style={{ width: col.width }}>
                                    {col.render ? (
                                        col.render(row)
                                    ) : (
                                        row[col.accessor!] !== undefined && row[col.accessor!] !== null
                                            ? String(row[col.accessor!])
                                            : '-'
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default DataTable;
