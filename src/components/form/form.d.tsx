export interface IForm {
  apiUri: string;
  method: "POST" | "PUT" | "GET";
  forms: IFormControl[];
}

interface IFormControl {
  label: string;
  placeHolder?: string;
  defValue?: string;
  type: "text" | "number" | "file" | "email";
  options?: IFormOption[];
  register?: IFormRegister;
}

interface IFormOption {
  value: string;
  label: string;
}

interface IFormRegister {
  label: string;
  isRequired?: boolean;
}
