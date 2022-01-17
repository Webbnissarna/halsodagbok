import type { NextPage } from "next";
import Head from "next/head";

import {
  Box,
  Flex,
  Select as UISelect,
  Input as UIInput,
  Label,
  InputProps,
  SelectProps,
} from "@theme-ui/components";
import { FormEventHandler } from "react";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Hälsodagbok</title>
        <meta name="description" content="Dagbok för att anteckna dagsmående" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        sx={{
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          color: "yellow",
          fontWeight: "bold",
          flexDirection: "column",
        }}
      >
        <h1>Hälsodagbok</h1>
        <Flex
          as="form"
          sx={{ flexDirection: "column", gap: "12px" }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input label="Vikt" type={"number"} min={0} defaultValue={80} />
          <Select label={"Generellt mående"} defaultValue={":|"}>
            <option value=":'(">-2</option>
            <option value=":(">-1</option>
            <option value=":|">0</option>
            <option value=":)">1</option>
            <option value=":')">2</option>
          </Select>
          <UIInput as="button" type="submit">
            Skicka
          </UIInput>
        </Flex>
      </Flex>

      <Box as="footer"></Box>
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
