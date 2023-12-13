"use client";

import { Center, Text } from "@chakra-ui/react";
import DashboardContent from "@/views/dashboard/dashboard";
import { useSidebarStore } from "@/providers/stores/stores";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [sb, setSb] = useState(false);

  useSidebarStore.subscribe((state) => setSb(state.isShowed));

  console.log(sb);

  return <DashboardContent />;
};

export default Dashboard;
