"use client";

import { Center, Text } from "@chakra-ui/react";

import { useSidebarStore } from "@/providers/stores/stores";
import { useEffect, useState } from "react";
import DashboardView from "@/views/dashboard/dashboard.view";
const Dashboard = () => {
  return <DashboardView />;
};

export default Dashboard;
