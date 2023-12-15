import Form from "@/components/form/Form";
import Paper from "@/components/paper/Paper";
import { EmailIcon } from "@chakra-ui/icons";
import { Box, Center, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";

const LoginView = () => {
  return (
    <Center h={"100vh"}>
      <Box w={500}>
        <Box bgColor={"white"}>
          <Box
            p={4}
            bgColor={"purple.300"}
            borderTopRadius={"md"}
            color={"white"}
          >
            <Heading>SIGN IN</Heading>
            <Text>We protect your privacy.</Text>
          </Box>
          <Divider />
          <Box p={4}>
            <Form
              apiUri="/"
              column={1}
              submitLabel="Sign In"
              submitColor="purple"
              forms={[
                {
                  label: "Email",
                  type: "email",
                  placeHolder: "Input You're Email",
                  register: { label: "email" },
                },
                {
                  label: "Password",
                  type: "password",
                  placeHolder: "Input You're Password",
                  register: { label: "password" },
                },
              ]}
              method="POST"
            />
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default LoginView;
