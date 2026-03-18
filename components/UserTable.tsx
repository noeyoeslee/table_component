'use client';

import { useMemo, useState } from 'react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { Badge, Box } from '@mantine/core';
import { User } from '@/lib/types';

interface UserTableProps {
  data: User[];
}

export function UserTable({ data }: UserTableProps) {
  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 60,
      },
      {
        accessorKey: 'name',
        header: '이름',
        size: 120,
      },
      {
        accessorKey: 'email',
        header: '이메일',
        size: 200,
      },
      {
        accessorKey: 'age',
        header: '나이',
        size: 80,
      },
      {
        accessorKey: 'joinDate',
        header: '가입일',
        size: 120,
      },
      {
        accessorKey: 'status',
        header: '상태',
        size: 100,
        Cell: ({ cell }) => (
          <Badge
            color={cell.getValue<string>() === 'active' ? 'green' : 'red'}
            variant="light"
          >
            {cell.getValue<string>() === 'active' ? '활성' : '비활성'}
          </Badge>
        ),
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data,
    enableColumnActions: true,
    enableColumnFilters: true,
    enablePagination: true,
    enableRowSelection: false,
    enableSorting: true,
    mantineTableProps: {
      striped: 'odd',
      highlightOnHover: true,
    },
  });

  return (
    <Box>
      <MantineReactTable table={table} />
    </Box>
  );
}
