import { Box, Heading, VStack } from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import SidebarHead from "./SidebarHead";
import SidebarLink from "./SidebarLink";
import { routes } from "@/configs/router/routes";
import { useSidebarStore } from "@/providers/stores/stores";

const Sidebar = () => {
  const [isShowed, setIsShowed] = useState(false);

  useSidebarStore.subscribe((state) => state.isShowed, setIsShowed);

  return (
    <Box
      w={200}
      bgColor={"white"}
      h={"100vh"}
      zIndex={999}
      display={{ md: "block" }}
      transition={"all .2s ease-in"}
      position={{ base: "fixed", md: "static" }}
      left={{ base: isShowed ? 0 : -200 }}
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
