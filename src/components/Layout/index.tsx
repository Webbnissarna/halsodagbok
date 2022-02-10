import { ReactNode } from "react";
import { Flex } from "@theme-ui/components";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";

export default function Layout({
  children,
  title = "Hälsodagbok",
}: {
  children?: ReactNode;
  title?: string;
}) {
  return (
    <Flex as={"main"} sx={{ flexDirection: "column", minHeight: "100vh" }}>
      <Header title={title} />
      <Content>{children}</Content>
      <Footer />
    </Flex>
  );
}
