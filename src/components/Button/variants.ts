import { ThemeUIStyleObject, StylePropertyValue } from "@theme-ui/core";

/** Something to look over */
interface IVariants {
  filled: {
    div: {
      width: string;
      backgroundColor: string;
      textAlign: StylePropertyValue<CanvasTextAlign | undefined>;
    };
  };
}

const variants = {
  filled: {
    div: {
      backgroundColor: "blue.9",
    },
    button: {
      color: "white",
    },
  },
  outlined: {
    div: {
      borderColor: "blue",
      borderStyle: "solid",
      borderWidth: 1,
    },
    button: {
      color: "blue.10",
    },
  },
};

export default variants;
