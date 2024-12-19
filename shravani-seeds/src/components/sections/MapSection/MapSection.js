import React from "react";
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Icon,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const MapComponent = () => {
  const headingFontSize = useBreakpointValue({ base: "xl", md: "3xl" });
  const iconSize = useBreakpointValue({ base: 5, md: 6 });
  const mapWidth = useBreakpointValue({ base: "100%", md: "60%" });
  const contactWidth = useBreakpointValue({ base: "100%", md: "40%" });
  const contactHeight = useBreakpointValue({ base: "auto", md: "400px" });

  return (
    <Stack
      p={5}
      boxShadow="lg"
      borderRadius="lg"
      maxW="100%"
      mx="auto"
      mt={10}
      spacing={8}
      color="black"
      alignItems="center" // Centers the "CONTACT US" heading
    >
      {/* Contact Us Heading */}
      <Heading
        fontSize={headingFontSize}
        textAlign="center"
        mb={4}
        width="100%"
        id="contact"
      >
        Contact Us
      </Heading>

      {/* Main Content: Contact Info and Map */}
      <Stack
        direction={{ base: "column", md: "row" }} // Row layout for larger screens, column for smaller screens
        width="100%"
        alignItems="flex-start" // Align items to the start (left-align) on larger screens
        justifyContent="space-between"
        spacing={8}
      >
        {/* Left Side: Contact Information */}
        <VStack
          p={5}
          spacing={4}
          width={contactWidth} // Responsive width
          height={contactHeight} // Responsive height
          align="flex-start" // Align left side content to the start (left-align)
          borderRadius="lg"
          color="black"
        >
          {/* Office Address */}
          <HStack spacing={4} align="flex-start">
            <Icon as={FaMapMarkerAlt} boxSize={iconSize} />
            <VStack align="flex-start" spacing={1}>
              <Heading fontSize="lg">OFFICE ADDRESS:</Heading>
              <Text fontSize="md">
                Village-Dhamedi,Teh-Pipoda,Dist-Ratlam <br />
                457331(M.P.)
              </Text>
            </VStack>
          </HStack>

          {/* Manufacturing Address */}
          {/* <HStack spacing={4} align="flex-start">
            <Icon as={FaMapMarkerAlt} boxSize={iconSize} />
            <VStack align="flex-start" spacing={1}>
              <Heading fontSize="lg">MANUFACTURING ADDRESS:</Heading>
              <Text fontSize="md">
                Village-Dhamedi,Teh-Pipoda,Dist-Ratlam <br />
                457331(M.P.)
              </Text>
            </VStack>
          </HStack> */}

          {/* Contact Information */}
          <HStack spacing={4} align="flex-start">
            <Icon as={FaPhone} boxSize={iconSize} />
            <VStack align="flex-start" spacing={1}>
              <Heading fontSize="lg">CALL US:</Heading>
              <Text fontSize="md">
                +91 7697957826
                <br /> +91 7223951396
              </Text>
            </VStack>
          </HStack>
        </VStack>

        {/* Right Side: Google Maps iframe */}
        <Box
          as="iframe"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29237.983812663075!2d74.978332!3d23.649195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39641d8f6647a93f%3A0x6a0dcf7e7289877e!2sDhamedi%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1725549431541!5m2!1sen!2sin"
          width={mapWidth} // Responsive width for the map
          height="400px"
          border="0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Stack>
    </Stack>
  );
};

export default MapComponent;
