import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

interface ISearch {
  placeholder?: string;
}

const Search = (props: ISearch) => {
  const { placeholder } = props;
  return (
    <InputGroup
      maxW={{ base: "full", md: 250 }}
      size={{ base: "sm", md: "md" }}
    >
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input placeholder={placeholder} />
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
