import { Box, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ContentHeader = (props: Props) => {
  return (
    <Box
      mb={4}
      px={2}
      borderLeftStyle={"solid"}
      borderLeftWidth={4}
      borderLeftColor={"purple.300"}
    >
      <Heading size={"md"} as={"h3"}>
        {props.children}
      </Heading>
    </Box>
  );
};

export default ContentHeader;
