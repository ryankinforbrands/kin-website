import { Avatar, Button, Flex, Heading, Link, Separator, Text } from "@radix-ui/themes";

const marginX = { initial: "5", sm: "7", md: "9", lg: "11" };

export function Home(): React.ReactElement {
  return (
    <Flex direction="column" minHeight="100vh">
      <Flex role="banner" direction="column">
        <Flex
          align="center"
          justify="between"
          mx="auto"
          width="100%"
          maxWidth="80rem"
          px={marginX}
          py="5"
        >
          <Flex align="center" gap="2">
            <Avatar src="/logo.svg" alt="Kin logo" size="1" radius="none" fallback="K" />
            <Text size="5" weight="bold">
              Kin
            </Text>
          </Flex>
          <Link
            href="mailto:kim@kinforbrands.com"
            size="2"
            weight="light"
            underline="always"
            color="gray"
          >
            GET IN TOUCH
          </Link>
        </Flex>
        <Separator size="4" color="gray" />
      </Flex>

      <Flex
        flexGrow="1"
        direction="column"
        justify="center"
        mx="auto"
        width="100%"
        maxWidth="80rem"
        px={marginX}
      >
        <Flex direction="column" maxWidth="42rem" gap="7">
          <Text
            size="1"
            weight="medium"
            color="gray"
            className="uppercase tracking-[0.2em]"
          >
            Introducing Kin for Brands
          </Text>
          <Flex direction="column" gap="0" maxWidth={{ initial: "90%", sm: "48rem" }}>
            <Heading className="text-[2.5rem] sm:text-5xl font-normal leading-snug">
              Grow your community without losing connection.
            </Heading>
          </Flex>
          <Flex direction="column" maxWidth="28rem">
            <Text size="5" weight="light" color="gray">
              A smarter way to find, know and grow your most valuable creator
              relationships.
            </Text>
          </Flex>

          <Flex>
            <Button size="3" mt="10" asChild>
              <Link
                href="mailto:kim@kinforbrands.com?subject=Early%20Access%20Request"
                underline="none"
              >
                Join the inner circle
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        role="contentinfo"
        align="center"
        mx="auto"
        width="100%"
        maxWidth="80rem"
        px={marginX}
        py="8"
      >
        <Text size="1" weight="light" color="gray">
          © {new Date().getFullYear()} Kin for Brands
        </Text>
      </Flex>
    </Flex>
  );
}
