'use client';

import { ColumnDef } from '@tanstack/react-table';
import { User } from './types';

// 테이블 컬럼 정의
export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 60,
  },
  {
    accessorKey: 'name',
    header: '이름',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'email',
    header: '이메일',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'age',
    header: '나이',
    size: 60,
  },
  {
    accessorKey: 'status',
    header: '상태',
  
];

// 샘플 데이터
export const sampleUsers: User[] = [
  {
    id: 1,
    name: '김철수',
    email: 'kim@example.com',
    age: 28,
    status: 'active',
  },
  {
    id: 2,
    name: '이영희',
    email: 'lee@example.com',
    age: 32,
    status: 'active',
  },
  {
    id: 3,
    name: '박민수',
    email: 'park@example.com',
    age: 25,
    status: 'inactive',
  },
  {
    id: 4,
    name: '정수진',
    email: 'jung@example.com',
    age: 31,
    status: 'active',
  },
  {
    id: 5,
    name: '최현준',
    email: 'choi@example.com',
    age: 26,
    status: 'inactive',
  },
];
