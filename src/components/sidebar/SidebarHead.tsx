import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import { ISBHead } from "./sidebar.d";

const SidebarHead = (props: ISBHead) => {
  const { title } = props;
  return (
    <Center h={150}>
      <Heading as={"h2"} size={"lg"} fontWeight={"normal"} color={"purple.600"}>
        {title}
      </Heading>
    </Center>
  );
};

export default SidebarHead;
