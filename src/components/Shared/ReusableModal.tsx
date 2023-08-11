import React from 'react';

import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;

  footerActions?: React.ReactNode;
  children: React.ReactNode;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  isOpen,
  onClose,
  children,
  footerActions,
}) => {
  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={'lg'}
    >
      <ModalOverlay />
      <ModalContent borderRadius={0}>
        <ModalBody>
          <Flex
            align="center"
            justify="center"
            height="100%"
            pt={10}
            flexDirection={'column'}
          >
            {children}
          </Flex>
        </ModalBody>
        <ModalFooter justifyContent={'center'}>{footerActions}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReusableModal;
