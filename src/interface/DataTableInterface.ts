export interface Column<T> {
    header: string;
    accessor?: keyof T;
    width?: string;
    render?: (row: T) => React.ReactNode;
    sortable?: boolean;
}

export interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
}

export type SortDirection = 'asc' | 'desc';
