import { LinkIcon } from "@chakra-ui/icons";
import { IRouter } from "./router.d";

export const routes: IRouter[] = [
  {
    routeName: "Dashboard",
    paths: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: LinkIcon,
      },
      {
        name: "DataTable",
        path: "/dashboard/datatable",
      },
      {
        name: "Form",
        path: "/dashboard/form",
      },
    ],
  },

  {
    routeName: "Auth",
    paths: [
      {
        name: "Login",
        path: "/login",
      },
    ],
  },
];
