import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      "html, body": {
        backgroundColor: "gray.50",
      },
    }),
  },
});
