import type { NextPage } from "next";
import Head from "../src/components/Head";

import {
  Box,
  Flex,
  Select as UISelect,
  Input as UIInput,
  Label,
  InputProps,
  SelectProps,
} from "@theme-ui/components";
import Link from "../src/components/Link";
import Layout from "../src/components/Layout";

const Home: NextPage = () => {
  return (
    <Box>
      <Head />
      <Layout>
        <Link variant="filled" text={"Login"} href={"/login"} />
      </Layout>
    </Box>
  );
};

interface IInputProps extends InputProps {
  label?: string;
}

function Input({ label, ...props }: IInputProps) {
  return (
    <Flex sx={{ flexDirection: "column", gap: "8px" }}>
      {label ? <Label htmlFor={props.name}>{label}</Label> : null}
      <UIInput {...props} />
    </Flex>
  );
}

interface ISelectProps extends SelectProps {
  label?: string;
}

function Select({ label, ...props }: ISelectProps) {
  return (
    <Flex sx={{ flexDirection: "column", gap: "8px" }}>
      {label ? <Label htmlFor={props.name}>{label}</Label> : null}
      <UISelect>{props.children}</UISelect>
    </Flex>
  );
}

export default Home;
