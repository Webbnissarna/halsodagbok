import type { AppProps } from "next/app";

import "../styles/globals.css";

import { ThemeProvider } from "@theme-ui/theme-provider";

const theme = {
  colors: {
    blue: [
      "#EBF2FE",
      "#D7E6FD",
      "#B0CDFB",
      "#89B4FA",
      "#629BF8",
      "#3B82F6",
      "#0B61EE",
      "#084BB8",
      "#063583",
      "#041F4D",
    ],
    background: "#89B4FA",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
