"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import { Flex } from "@chakra-ui/react";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex flexDir={"row"}>
      <Sidebar />
      {children}
    </Flex>
  );
};

export default DashboardLayout;
