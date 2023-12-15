"use client";

import { Content } from "@/components/content";
import Paper from "@/components/paper/Paper";

import React, { useState, useEffect } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button, Flex, Heading, Spacer, Spinner } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { SearchIcon } from "@chakra-ui/icons";
import Pagination from "@/components/table/Pagination";
import { Search } from "@/components/search";
import useApi from "@/configs/hooks/useApi/useApi";
import { IRApi } from "@/configs/hooks/useApi/useApi.d";

const Table = dynamic(() => import("@/components/table/Table"), {
  loading: () => <Spinner color="purple.300" />,
});

interface IData {
  id: number;
  firstName: string;
  email: string;
  gender: string;
}

const DatatableView = () => {
  const [dummy, setDummy] = useState<IRApi>({
    result: [],
    status: 200,
  });

  // const data: IData[] = [
  //   {
  //     id: 1,
  //     firstName: "John",
  //     email: "john@gmail.com",
  //     address: "ur home",
  //   },
  //   {
  //     id: 5,
  //     firstName: "Cid",
  //     email: "cid@gmail.com",
  //     gender: "Isekai",
  //   },
  // ];

  const columns: ColumnDef<IData, any>[] = [
    {
      header: "Name",
      accessorKey: "firstName",
      id: "firstName",
    },
    {
      header: "Email",
      accessorKey: "email",
      id: "email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      id: "gender",
    },
    {
      header: "Action",
      accessorKey: "id",
      cell: (info) => (
        <Button
          colorScheme="red"
          size={"sm"}
          onClick={() => console.log(info.renderValue())}
        >
          Click Me!
        </Button>
      ),
    },
  ];
  //   columnHelper.accessor("name", {
  //     cell: (info) => info.getValue(),
  //     footer: (info) => info.column.id,
  //   }),
  //   columnHelper.accessor("email", {
  //     cell: (info) => info.getValue(),
  //     footer: (info) => info.column.id,
  //   }),
  //   columnHelper.accessor("address", {
  //     cell: (info) => info.getValue(),
  //     footer: (info) => info.column.id,
  //   }),

  //   columnHelper.accessor("action", {
  //     cell: (info) => <Button colorScheme="twitter" size={"sm"}></Button>,
  //     footer: (info) => info.column.id,
  //   }),

  console.log(dummy, "ok");

  return (
    <Content>
      <Paper>
        <Flex
          borderLeftStyle={"solid"}
          borderLeftWidth={4}
          borderLeftColor={"purple.300"}
          px={2}
          my={4}
          flexDir={"row"}
          alignItems={"center"}
        >
          <Heading as={"h5"} size={"md"}>
            Datatable
          </Heading>
          <Spacer />
          <Search />
        </Flex>
        <Table variant="simple" data={dummy?.result?.users} columns={columns} />
        <Pagination
          apiUri="https://dummyjson.com/users"
          dataResult={setDummy}
          take={10}
        />
      </Paper>
    </Content>
  );
};

export default DatatableView;
