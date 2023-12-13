import React from "react";
import { ISBLink } from "./sidebar.d";
import { Link } from "@chakra-ui/next-js";

const SidebarLink = (props: ISBLink) => {
  const { icon, name, path } = props;
  return (
    <Link
      href={path}
      py={2}
      px={4}
      borderLeftColor={"white"}
      borderLeftStyle={"solid"}
      borderLeftWidth={4}
      w={"full"}
      _hover={{
        color: "purple.600",
        borderLeftColor: "purple.800",
        borderLeftStyle: "solid",
        borderLeftWidth: 4,
      }}
    >
      {name}
    </Link>
  );
};

export default SidebarLink;
