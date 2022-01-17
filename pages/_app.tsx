import type { AppProps } from "next/app";

import { ThemeProvider } from "@theme-ui/theme-provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ colors: { background: "#0fa20f" } }}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
