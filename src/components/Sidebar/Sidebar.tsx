import { Button } from '@chakra-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sidebar',
  description: 'Sidebar desc',
};

export default function Sidebar() {
  return (
    <div>
      <Button variant={'secondary'} size={'sm'} fontSize={12} width={100}>
        Test Button
      </Button>
    </div>
  );
}
