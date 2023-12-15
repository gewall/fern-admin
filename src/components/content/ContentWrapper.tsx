import { Box } from "@chakra-ui/react";
import React from "react";

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box p={4} flex={1} w={"100vw"}>
      {children}
    </Box>
  );
};

export default ContentWrapper;
