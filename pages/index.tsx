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
import { ChangeEvent, useState } from "react";

const Home: NextPage = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e: ChangeEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({ [name]: value });
  };
  const handleSelectChange = (e: ChangeEvent) => {
    const target = e.currentTarget as HTMLSelectElement;
    const value = target.value;
    const name = target.name;

    setFormData({ [name]: value });
  };

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
            fetch;
          }}
        >
          <Input
            name="weight"
            onChange={handleInputChange}
            label="Vikt"
            type={"number"}
            min={0}
            defaultValue={80}
          />
          <Select
            name="wellness"
            label={"Generellt mående"}
            defaultValue={":|"}
          >
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
