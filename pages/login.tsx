import React from "react";
import Head from "../src/components/Head";
import Layout from "../src/components/Layout";
import { Box } from "@theme-ui/components";
import Button from "../src/components/Button/Button";

export default function Login() {
  return (
    <Box>
      <Head />
      <Layout>
        <Button text="Google" variant="outlined" />
        <Button text="Github" variant="outlined" />
      </Layout>
    </Box>
  );
}
