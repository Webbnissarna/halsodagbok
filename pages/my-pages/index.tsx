import React from "react";
import { Box, Text } from "@theme-ui/components";
import Head from "../../src/components/Head";
import Layout from "../../src/components/Layout";

export default function Index() {
  return (
    <Box>
      <Head />
      <Layout>
        <Text>How do you feel today?</Text>
        <Box
          sx={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            borderStyle: "solid",
            borderWidth: 16,
            borderColor: "white",
            clipPath: "ellipse(160px 160px at 50% 60%)",
          }}
        />
      </Layout>
    </Box>
  );
}
