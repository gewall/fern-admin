import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { ButtonGroup, HStack, IconButton, Text } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { IPagination } from "./table.d";
import useApi from "@/configs/hooks/useApi/useApi";

interface IPaging {
  skip: number;
  take: number;
  page: number;
}

const Pagination = (props: IPagination) => {
  const { apiUri, dataResult, take } = props;
  const { Get } = useApi({ apiUri });
  const [paging, setPaging] = useState<IPaging>({ skip: 0, take, page: 1 });

  const onNext = () => {
    setPaging({ ...paging, skip: paging.skip + 5, page: paging.page + 1 });
  };

  const onPrev = () => {
    if (paging.skip === 0) {
      setPaging({ ...paging, skip: 0, page: 1 });
    } else {
      setPaging({ ...paging, skip: paging.skip - 5, page: paging.page - 1 });
    }
  };

  useEffect(() => {
    const getData = async () => {
      const req = await Get({ limit: take, skip: paging.skip });

      dataResult(req);
    };

    getData();
  }, [paging]);

  return (
    <HStack mx={6} my={4}>
      <ButtonGroup>
        <IconButton
          size={"sm"}
          colorScheme="blue"
          aria-label="Back"
          onClick={onPrev}
          icon={<ArrowBackIcon />}
        />
        <IconButton
          size={"sm"}
          colorScheme="blue"
          aria-label="Back"
          onClick={onNext}
          icon={<ArrowForwardIcon />}
        />
      </ButtonGroup>
      <Text>Page {paging.page} Of 100</Text>
    </HStack>
  );
};

export default Pagination;
