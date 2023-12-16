"use client";

import {
  Flex,
  HStack,
  Heading,
  IconButton,
  VStack,
  Spacer,
  Avatar,
  Text,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { INav } from "./navbar.d";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useSidebarStore } from "@/providers/stores/stores";

const Navbar = (props: INav) => {
  const [isShowed, setIsShowed] = useState(false);

  useSidebarStore.subscribe((state) => state.isShowed, setIsShowed);
  return (
    <Flex as={"nav"}>
      <HStack spacing={4}>
        <VStack alignItems={"flex-start"}>
          <Heading as={"h5"} size={"sm"} fontWeight={"regular"}>
            Hai, (Nama)
          </Heading>
          <Heading as={"h4"} size={"md"}>
            Selamat (Pagi)
          </Heading>
        </VStack>
      </HStack>
      <Spacer />
      <HStack>
        <IconButton
          colorScheme="purple"
          aria-label="Hamburger button"
          variant={"outline"}
          size={"sm"}
          icon={isShowed ? <CloseIcon /> : <HamburgerIcon />}
          onClick={() =>
            useSidebarStore.setState({
              isShowed: !useSidebarStore.getState().isShowed,
            })
          }
        />
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            colorScheme="purple"
          >
            {"Algi Nugraha".split(" ").slice(0, 1)}
          </MenuButton>
          {/* <HStack
            as={MenuButton}
            py={1}
            px={4}
            rounded={"full"}
            bgColor={"white"}
            spacing={2}
            alignItems={"center"}
            flexWrap={"nowrap"}
          >
            <Avatar name="Algi Nugraha" size={"sm"} />
            <VStack spacing={0} alignItems={"flex-start"}>
              <Heading as={"h5"} size={"sm"}>
                Algi
              </Heading>
              <Text fontSize={"small"}>Admin</Text>
            </VStack>
            <ChevronDownIcon />
          </HStack> */}
          <MenuList>
            <MenuItem>Keluar</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Navbar;
