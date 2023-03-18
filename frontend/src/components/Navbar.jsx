import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Show,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { Sidebar } from '.';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuRef = useRef();

  return (
    <Flex
      as="nav"
      bg="gray.700"
      color="gray.50"
      h="8vh"
      p="10px"
      alignItems="center"
      fontSize="2xl"
    >
      <Show breakpoint="(max-width: 480px)">
        <Box ref={menuRef} onClick={onOpen}><FaBars /></Box>

        <Drawer
          isOpen={isOpen}
          placement="right"
          size="xs"
          onClose={onClose}
          finalFocusRef={menuRef}
          bg="gray.900"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color="gray.500" />
            <DrawerBody
              bg="gray.900"
            >
              <Sidebar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
      <span>Navbar</span>
    </Flex>
  );
}

export default Navbar;
