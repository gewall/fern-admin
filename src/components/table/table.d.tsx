import { IRApi } from "@/configs/hooks/useApi/useApi.d";

export interface ITable {
  variant: "simple";
  caption?: string;
  columns: any[];
  data: IRApi[];
  showFooter?: boolean;
}

export interface IPagination {
  apiUri: string;
  take: 10 | 20 | 30 | 40 | 50;
  dataResult: (data: any) => void;
}
