"use client";

import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { IForm } from "./form.d";
import { useForm } from "react-hook-form";

const Form = (props: IForm) => {
  const { apiUri, forms, method } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = (e: any) => {
    console.log(e);
  };
  return (
    <Stack as={"form"} onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {forms.map((item, i) => (
          <FormControl key={i}>
            <FormLabel>{item.label}</FormLabel>
            <Input
              placeholder={item.placeHolder}
              defaultValue={item.defValue}
              type="text"
              {...register(item.register?.label || "", {
                required: item.register?.isRequired,
              })}
            />
            {item.options &&
              item.options.map((_item, _i) => (
                <Fragment key={i}>
                  <option value={_item.value}>{_item.label}</option>
                </Fragment>
              ))}
          </FormControl>
        ))}
      </SimpleGrid>
      <ButtonGroup my={2} justifyContent={"flex-end"}>
        <Button type="submit" colorScheme="whatsapp">
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export default Form;
