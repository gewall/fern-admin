import React from "react";
import { ISBLink } from "./sidebar.d";
import { Link } from "@chakra-ui/next-js";
import { usePathname } from "next/navigation";
import { HStack, Icon, Stack, Text } from "@chakra-ui/react";

const SidebarLink = (props: ISBLink) => {
  const { icon, name, path } = props;
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Link
      href={path}
      py={2}
      px={4}
      borderLeftColor={isActive ? "purple.800" : "white"}
      borderLeftStyle={"solid"}
      borderLeftWidth={4}
      w={"full"}
      _hover={{
        color: "purple.600",
        borderLeftColor: "purple.800",
        borderLeftStyle: "solid",
        borderLeftWidth: 4,
        bgColor: "purple.50",
      }}
    >
      <Stack
        spacing={4}
        flexDir={"row"}
        flexWrap={"nowrap"}
        w={"full"}
        alignItems={"center"}
      >
        {icon && <Icon as={icon} />}

        <Text>{name}</Text>
      </Stack>
    </Link>
  );
};

export default SidebarLink;
