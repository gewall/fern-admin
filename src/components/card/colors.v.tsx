interface IAttr {
  [key: string]: {
    bgColor: string;
    color: string;
  };
}

export const colors: IAttr = {
  blue: {
    bgColor: "blue.100",
    color: "blue.600",
  },
  red: {
    bgColor: "red.100",
    color: "red.600",
  },
  yellow: {
    bgColor: "yellow.100",
    color: "yellow.600",
  },
  green: {
    bgColor: "green.100",
    color: "green.600",
  },
};
