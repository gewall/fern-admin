"use client";

import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { IForm } from "./form.d";
import { useForm } from "react-hook-form";

const Form = (props: IForm) => {
  const { apiUri, forms, method, column, submitColor, submitLabel } = props;
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
      <SimpleGrid columns={{ base: 1, md: column || 2 }} spacing={4}>
        {forms.map((item, i) => (
          <FormControl key={i}>
            <FormLabel>{item.label}</FormLabel>
            {item.type === "select" ? (
              <Select
                placeholder={item.placeHolder}
                {...register(item.register?.label || "", {
                  required: item.register?.isRequired,
                })}
              >
                {item.options &&
                  item.options.map((_item, _i) => (
                    <Fragment key={_i}>
                      <option value={_item.value}>{_item.label}</option>
                    </Fragment>
                  ))}
              </Select>
            ) : (
              <Input
                placeholder={item.placeHolder}
                defaultValue={item.defValue}
                type={item.type}
                {...register(item.register?.label || "", {
                  required: item.register?.isRequired,
                })}
              />
            )}
          </FormControl>
        ))}
      </SimpleGrid>
      <ButtonGroup my={2} justifyContent={"flex-end"}>
        <Button type="submit" colorScheme={submitColor || "whatsapp"}>
          {submitLabel || "Save"}
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export default Form;
