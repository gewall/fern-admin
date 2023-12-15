import { Box, HStack, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { colors } from "../colors.v";
import { ICard } from "../card.d";

const FitCard = (props: ICard) => {
  const { desc, icon, title, variant, chakra } = props;
  const _variant = colors[variant || "blue"];

  return (
    <Box
      rounded={"md"}
      p={4}
      {..._variant}
      minW={150}
      maxW={"full"}
      {...chakra}
    >
      <HStack>
        <Icon as={icon} h={8} w={8} />
        <VStack alignItems={"flex-start"} spacing={0}>
          <Heading as={"h5"} size={"md"}>
            {title}
          </Heading>
          <Text>{desc}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default FitCard;
