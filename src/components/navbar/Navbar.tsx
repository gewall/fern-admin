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
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { INav } from "./navbar.d";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useSidebarStore } from "@/providers/stores/stores";

const Navbar = (props: INav) => {
  return (
    <Flex as={"nav"}>
      <HStack spacing={4}>
        {/* <IconButton
          colorScheme="whatsapp"
          aria-label="Hamburger button"
          variant={"outline"}
          size={"sm"}
          icon={
            useSidebarStore.getState().isShowed ? (
              <CloseIcon />
            ) : (
              <HamburgerIcon />
            )
          }
          onClick={() =>
            useSidebarStore.setState({
              isShowed: !useSidebarStore.getState().isShowed,
            })
          }
        /> */}
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
        <Stack
          py={1}
          px={4}
          rounded={"full"}
          bgColor={"white"}
          spacing={2}
          flexDir={"row"}
          alignItems={"center"}
        >
          <Avatar name="Algi Nugraha" size={"sm"} />
          <VStack spacing={0} alignItems={"flex-start"}>
            <Heading as={"h5"} size={"sm"}>
              Algi
            </Heading>
            <Text fontSize={"small"}>Admin</Text>
          </VStack>
          <ChevronDownIcon />
        </Stack>
      </HStack>
    </Flex>
  );
};

export default Navbar;
