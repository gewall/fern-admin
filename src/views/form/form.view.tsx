"use client";

import { Content } from "@/components/content";
import Form from "@/components/form/Form";
import Paper from "@/components/paper/Paper";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const FormView = () => {
  return (
    <Content>
      <Paper>
        <Form
          apiUri="/"
          method="POST"
          forms={[
            {
              label: "Name",
              type: "text",
              placeHolder: "Input Name",
              register: { label: "name", isRequired: true },
            },
            {
              label: "Email",
              type: "email",
              placeHolder: "Input Email",
              register: { label: "email", isRequired: true },
            },
          ]}
        />
      </Paper>
    </Content>
  );
};

export default FormView;
