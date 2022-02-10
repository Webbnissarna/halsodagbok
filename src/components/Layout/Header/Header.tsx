import { Box, Heading } from "@theme-ui/components";

export default function Header({ title }: { title: string }) {
  return (
    <Box as={"header"}>
      <Heading
        as={"h1"}
        sx={{
          fontFamily: "Pacifico",
          fontSize: "3rem",
          color: "blue.8",
          textAlign: "center",
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
