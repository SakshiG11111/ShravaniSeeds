import React from 'react';
import { Box, Link, Icon, Flex, useBreakpointValue } from '@chakra-ui/react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

function FixedContactButtons() {
  const phoneNumber = '7697957826'; // Replace with the actual phone number
  const whatsappMessage = 'Hello, I would like to know more about your services.';
  const whatsappUrl = `https://wa.me/${7223951396}?text=${encodeURIComponent(whatsappMessage)}`;
  const phoneUrl = `tel:${phoneNumber}`;

  // Use responsive sizes for the icons and padding
  const iconSize = useBreakpointValue({ base: '4', md: '6' });
  const paddingSize = useBreakpointValue({ base: '8px', md: '10px' });
  const bottomPosition = useBreakpointValue({ base: '10px', md: '20px' });
  const rightPosition = useBreakpointValue({ base: '10px', md: '20px' });

  return (
    <Box position="fixed" bottom={bottomPosition} right={rightPosition} zIndex="1000">
      <Flex direction="column" alignItems="center" gap="10px">
        {/* WhatsApp Button */}
        <Link href={whatsappUrl} isExternal>
          <Box
            as="button"
            bg="#25D366"
            color="white"
            p={paddingSize}
            borderRadius="full"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{ bg: '#20c253' }}
          >
            <Icon as={FaWhatsapp} w={iconSize} h={iconSize} />
          </Box>
        </Link>

        {/* Phone Call Button */}
        <Link href={phoneUrl} isExternal>
          <Box
            as="button"
            bg="#007bff"
            color="white"
            p={paddingSize}
            borderRadius="full"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{ bg: '#006bde' }}
          >
            <Icon as={FaPhoneAlt} w={iconSize} h={iconSize} />
          </Box>
        </Link>
      </Flex>
    </Box>
  );
}

export default FixedContactButtons;
