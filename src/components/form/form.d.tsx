export interface IForm {
  apiUri: string;
  method: "POST" | "PUT" | "GET";
  forms: IFormControl[];
  column?: 1 | 2;
  submitLabel?: string;
  submitColor?: string;
}

interface IFormControl {
  label: string;
  placeHolder?: string;
  defValue?: string;
  type: "text" | "number" | "file" | "email" | "password";
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
