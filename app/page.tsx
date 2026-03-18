import { TableContainer } from '@/components/TableContainer';
import { sampleUsers } from '@/lib/data';

export default function Home() {
  return (
    <main>
      <TableContainer
        title="사용자 관리"
        description="모든 사용자의 정보를 확인하고 관리합니다."
        data={sampleUsers}
      />
    </main>
  );
}
