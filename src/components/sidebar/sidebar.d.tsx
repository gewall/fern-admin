import { ReactComponentElement } from "react";

export interface ISBHead {
  title: string;
}

export interface ISBLink {
  name: string;
  path: string;
  icon?: ReactComponentElement | string;
}
