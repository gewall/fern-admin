import { FitCard } from "@/components/card";
import { Content } from "@/components/content";
import Sidebar from "@/components/sidebar/Sidebar";
import { TimeIcon } from "@chakra-ui/icons";
import { Flex, Stack } from "@chakra-ui/react";
import React from "react";

const DashboardView = () => {
  return (
    <Content>
      <Stack flexDir={{ base: "column", md: "row" }}>
        <FitCard title="Cardto" desc={"Percobaan"} icon={TimeIcon} />
        <FitCard title="Holla" desc={"Eaakk"} icon={TimeIcon} variant="red" />
      </Stack>
    </Content>
  );
};

export default DashboardView;
