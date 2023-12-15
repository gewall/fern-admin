"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../navbar/Navbar";
import ContentWrapper from "./ContentWrapper";

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContentWrapper>
      <Navbar />
      <Box as={"main"} my={2}>
        {children}
      </Box>
    </ContentWrapper>
  );
};

export default Content;
