import React from 'react';

import { Button } from '@chakra-ui/react';

import useSidebarStore from '@/stores/useSidebarStore';

const Header: React.FC = () => {
  const setIsCollapsed = useSidebarStore((state) => state.setIsCollapsed);
  return (
    <>
      <Button onClick={setIsCollapsed}>Toggle Sidebar</Button>
    </>
  );
};

export default Header;
