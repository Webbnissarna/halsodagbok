import React from "react";

import { Box } from "@theme-ui/components";

import variants from "./variants";

export default function Button({
  text,
  onClick,
  variant = "filled",
}: {
  text: string;
  onClick?: () => void;
  variant?: "filled" | "outlined";
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
      onClick={onClick}
    >
      <Box
        as={`button`}
        sx={{
          background: "none",
          border: "none",
          ...variants[variant as keyof typeof variants].button,
        }}
      >
        {text}
      </Box>
    </Box>
  );
}
