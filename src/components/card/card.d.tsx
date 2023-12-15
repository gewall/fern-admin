import { ChakraProps } from "@chakra-ui/react";
import { ReactComponentElement } from "react";

export interface ICard {
  title: string;
  desc?: string;
  icon?: ReactComponentElement | string;
  variant?: "blue" | "red" | "yellow" | "green";
  chakra?: ChakraProps;
}
