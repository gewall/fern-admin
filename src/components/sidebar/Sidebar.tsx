import { Box, VStack } from "@chakra-ui/react";
import React, { Fragment } from "react";
import SidebarHead from "./SidebarHead";
import SidebarLink from "./SidebarLink";
import { routes } from "@/configs/router/routes";

const Sidebar = () => {
  return (
    <Box w={200} bgColor={"white"} h={"100vh"}>
      <SidebarHead title="F E R N" />
      <VStack alignItems={"flex-start"}>
        {routes.map((item, i) => (
          <Fragment key={i}>
            <SidebarLink {...item} />
          </Fragment>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
