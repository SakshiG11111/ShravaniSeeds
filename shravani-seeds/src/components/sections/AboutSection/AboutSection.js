"use client";
import { useState } from "react";
import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  FormControl,
  Switch,
  Icon,
  FormLabel
} from "@chakra-ui/react";
import { FaHandPointer } from "react-icons/fa";
import Img2 from "../../../assets/Founder.jpg"

export default function AboutUsCard() {
  const [isHindi, setIsHindi] = useState(false);
  const headingFontSize = useBreakpointValue({
    base: "2xl",
    md: "3xl",
    lg: "4xl",
  });
  const imageSize = useBreakpointValue({
    base: "200px",
    sm: "200px",
    md: "260px",
    lg: "280px",
  });
  const fontSizeHeading = useBreakpointValue({
    base: "sm",
    sm: "l",
    md: "xl",
    lg: "2xl",
  });
  const fontSizeText = useBreakpointValue({
    base: "sm",
    sm: "md",
    md: "lg",
    lg: "xl",
  });

  return (
    <Flex
      flexDirection="column"
      align="center"
      p={4}
      id="about"
      w="100%"
      maxW="1200px"
      mx="auto"
    >
      {/* About Us Heading */}
      <Center py={6} flexDirection="column" w="100%">
        <Heading
          fontSize={headingFontSize}
          mb={4}
          textAlign="center"
          width="100%"
          padding="0.5rem"
        >
          About Us
        </Heading>

        {/* About Us Content */}
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w="100%"
          maxW="1200px"
          h={{ base: "auto", md: "auto" }}
          direction={{ base: "column", md: "row" }}
          boxShadow="2xl"
          padding={4}
          spacing={4}
        >
          <Flex
            flex={1}
            // bg="blue.200"
            align="center"
            justify="center"
            p={4}
            borderRadius="md"
          >
            <VStack spacing={4} align="center">
              <Image
                src={Img2}
                alt="Founder Name"
                borderRadius="full"
                boxSize={imageSize}
                mx="auto"
              />
              <Text fontWeight="bold" fontSize={fontSizeHeading}>
                Mr. Radheshyam Patidar
              </Text>
              <Text color="gray.500" fontSize={fontSizeText}>
                Founder & CEO
              </Text>
            </VStack>
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={4}
            spacing={4}
          >
            {/* Switch for language selection */}
            <Flex flexDirection="column" align="center" mb={4}>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="language-switch" mb="0">
                  {isHindi ? "हिन्दी" : "English"}
                </FormLabel>
                <Switch
                  id="language-switch"
                  onChange={() => setIsHindi(!isHindi)}
                  isChecked={isHindi}
                  colorScheme="teal"
                />
              </FormControl>
              <Flex alignItems="center" justifyContent="center">
                <Text fontSize={fontSizeText}>
                  {isHindi ? "See in English" : "हिंदी में देखें"}
                </Text>
                <Icon as={FaHandPointer} ml={2} />
              </Flex>
            </Flex>

            {/* About Us Text */}
            <Text textAlign="start" fontSize={fontSizeText} px={[2, 3, 4]}>
              {isHindi ? (
                <>
                  <b>2017 में श्री राधेश्याम पाटीदार द्वारा स्थापित</b>, श्रवणि
                  सीड्स उच्च गुणवत्ता वाले <b>गेहूं और सोयाबीन बीज</b> प्रदान
                  करने में विशेषज्ञ है।
                  <b>5000+ से अधिक ग्राहकों द्वारा विश्वसनीय</b>, हम किसानों को
                  बेहतर उत्पादन और स्थिरता के लिए समर्थन प्रदान करने के लिए
                  प्रतिबद्ध हैं।
                  <b>गुणवत्ता की खेती, विश्वास का विकास</b>, हम नवाचार और
                  स्थिरता पर ध्यान केंद्रित करते हैं, यह सुनिश्चित करते हुए कि
                  हमारे बीज उच्चतम गुणवत्ता मानकों को पूरा करते हैं। श्रवणि
                  सीड्स में, हम आपके कृषि साथी हैं, जो आपको एक समृद्ध और स्थायी
                  भविष्य की ओर ले जाने में समर्पित हैं।
                </>
              ) : (
                <>
                  <b>Founded in 2017 by Mr. Radheshyam Patidar</b>, Shravani
                  Seeds specializes in providing high-quality <b>wheat</b> and{" "}
                  <b>soyabean seeds</b>.<b>Trusted by over 5,000 customers</b>,
                  we are committed to supporting farmers with seeds that deliver
                  superior yields and resilience.
                  <br />
                  <b>Cultivating Quality, Growing Trust</b>, we focus on
                  innovation and sustainability, ensuring our seeds meet the
                  highest industry standards for quality and performance. At
                  Shravani Seeds, we are your partner in farming, dedicated to
                  helping you grow a more prosperous and sustainable future.
                </>
              )}
            </Text>
          </Stack>
        </Stack>
      </Center>
    </Flex>
  );
}
