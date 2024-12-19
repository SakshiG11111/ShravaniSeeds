import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Image,
  VisuallyHidden,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaSeedling,
} from "react-icons/fa";
import ShravaniSeedsLogo2 from "../../assets/shravani_seeds_logo_2.svg";
import { useNavigate } from "react-router-dom";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const navigate = useNavigate();
  const handleClickProduct = () => {
    navigate("/product");
    window.scrollTo(0, 0);
  };
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6} align={"center"}>
            <Image
              height="100px"
              width="auto"
              userSelect={"none"}
              src={ShravaniSeedsLogo2}
              alt="Shravani Seeds"
              marginLeft={"-10px"} // Adjust this value as needed
            />
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram style={{ marginLeft: "-5px" }} />{" "}
                {/* Adjust this value as needed */}
              </SocialButton>
            </Stack>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"/#"}>
              Home
            </Box>
            <Box as="a" onClick={handleClickProduct} cursor={'pointer'}>
              Products
            </Box>
            <Box as="a" href={"/#about"}>
              About Us
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={"#"}>
              Help Center
            </Box>
            <Box as="a" href={"#"}>
              Shipping & Returns
            </Box>
            <Box as="a" href={"#"}>
              FAQs
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Contact</ListHeader>
            <Flex align="center" mb={2}>
              <FaPhoneAlt mr={2} />
              <Link href="tel:+7223951396" color={"blue.500"} ml={3}>
                7223951396
              </Link>
            </Flex>
            <Flex align="center" mb={2}>
              <FaPhoneAlt mr={2} />
              <Link href="tel:+7697957826" color={"blue.500"} ml={3}>
                7697957826
              </Link>
            </Flex>
            <Flex align="center" mb={2}>
              <FaEnvelope mr={2} />
              <Link href="mailto:shravaniseeds@gmail.com" color={"blue.500"} ml={3}>
                shravaniseeds@gmail.com
              </Link>
            </Flex>
          </Stack>
        </SimpleGrid>
        <Flex
          align="center"
          justify="center"
          mt={10}
          p={5}
          borderTopWidth={1}
          borderColor={borderColor}
          gap={3}
        >
          <Text fontSize={{ base: "sm", sm: "sm", md: "md", lg: "lg" }} fontWeight="bold">
            Cultivating Quality, Growing Trust
          </Text>
          <FaSeedling size="24px" color="green.400" />
        </Flex>
      </Container>
      <Box
        py={4}
        bg={useColorModeValue("gray.100", "gray.800")}
        color={useColorModeValue("gray.600", "gray.400")}
        textAlign={"center"}
      >
        <Text>
          &copy; {new Date().getFullYear()} Shravani Seeds. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
