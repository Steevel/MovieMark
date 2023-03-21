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
  Text,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Sidebar } from '.';
import { toggleDarkMode } from '../features/darkModeSlice';

function Navbar() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.mode.darkMode);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuRef = useRef();

  return (
    <Flex
      as="nav"
      bg={darkMode ? 'gray.700' : 'red.600'}
      color="gray.50"
      h="8vh"
      p="10px"
      alignItems="center"
      justifyContent="space-between"
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
          bg={darkMode ? 'gray.900' : 'white'}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color="gray.500" />
            <DrawerBody
              bg={darkMode ? 'gray.900' : 'white'}
            >
              <Sidebar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
      <Text>Moviemark - Navbar</Text>
      <Box onClick={() => dispatch(toggleDarkMode())}>{darkMode ? <FaSun /> : <FaMoon />}</Box>
    </Flex>
  );
}

export default Navbar;
