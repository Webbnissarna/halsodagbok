import { ReactNode } from "react";
import { Flex } from "@theme-ui/components";

export default function Content({ children }: { children: ReactNode }) {
  return (
    <Flex
      sx={{
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      {children}
    </Flex>
  );
}
