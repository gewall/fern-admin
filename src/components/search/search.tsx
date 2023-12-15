import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

const Search = () => {
  return (
    <InputGroup maxW={{ base: 150, md: 250 }} size={{ base: "sm", md: "md" }}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input />
      <InputRightElement w={16}>
        <Button
          w={16}
          roundedLeft={"unset"}
          colorScheme="purple"
          size={{ base: "sm", md: "md" }}
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default Search;
