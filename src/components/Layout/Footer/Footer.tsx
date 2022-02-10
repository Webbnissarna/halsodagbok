import { Flex, Text } from "@theme-ui/components";

export default function Footer() {
  const name = "André";
  const nameExists = name?.length > 0;
  return (
    <Flex
      as="footer"
      sx={{
        justifyContent: nameExists ? "space-between" : "flex-end",
        padding: "0.75rem",
        color: "black",
      }}
    >
      {nameExists && <Text>{name}</Text>}
      <Text>About</Text>
    </Flex>
  );
}
