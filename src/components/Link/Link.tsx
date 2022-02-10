import NLink from "next/link";
import { Box } from "@theme-ui/components";
import { jsx } from "@theme-ui/core";

import variants from "./variants";

export default function Link({
  variant = "filled",
  href,
  text,
}: {
  variant: "filled" | "outlined";
  href: string;
  text: string;
}) {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        padding: "1.25rem",
        borderRadius: 50,
        maxWidth: 312,
        ...variants[variant as keyof typeof variants].div,
      }}
    >
      <NLink href={href} passHref={true}>
        <Box
          as={"a"}
          sx={{
            background: "none",
            border: "none",
            textDecoration: "none",
            ...variants[variant as keyof typeof variants].link,
          }}
        >
          {text}
        </Box>
      </NLink>
    </Box>
  );
}
