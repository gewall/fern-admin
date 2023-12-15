import { Box } from "@chakra-ui/react";
import React from "react";

const Paper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box p={4} bgColor={"white"} rounded={"md"} w={"full"}>
      {children}
    </Box>
  );
};

export default Paper;
