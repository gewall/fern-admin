import { Box, Heading, VStack } from "@chakra-ui/react";
import React, { Fragment } from "react";
import SidebarHead from "./SidebarHead";
import SidebarLink from "./SidebarLink";
import { routes } from "@/configs/router/routes";

const Sidebar = () => {
  return (
    <Box
      w={200}
      bgColor={"white"}
      h={"100vh"}
      display={{ base: "none", md: "block" }}
    >
      <SidebarHead title="F E R N" />
      <VStack alignItems={"flex-start"}>
        {routes.map((item, i) => (
          <Fragment key={i}>
            <Heading as={"h5"} size={"sm"} color={"purple.300"} ml={4}>
              {item.routeName}
            </Heading>
            {item.paths.map((_item, _i) => (
              <Fragment key={_i}>
                <SidebarLink {..._item} />
              </Fragment>
            ))}
          </Fragment>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
