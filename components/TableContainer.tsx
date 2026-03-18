'use client';

import { Container, Title, Text, Box } from '@mantine/core';
import { UserTable } from './UserTable';
import { User } from '@/lib/types';

interface TableContainerProps {
  title: string;
  description?: string;
  data: User[];
}

export function TableContainer({
  title,
  description,
  data,
}: TableContainerProps) {
  return (
    <Container size="xl" py="xl">
      <Box mb="lg">
        <Title order={1}>{title}</Title>
        {description && <Text c="dimmed">{description}</Text>}
      </Box>
      <UserTable data={data} />
    </Container>
  );
}
