import { Box, Image, Text, Flex, VStack, HStack } from "@chakra-ui/react";

function DirectorCard() {
  return (
    <Flex 
      justify="center" 
      align="center" 
      height="65vh"  // Center vertically within the viewport height
      p={[4, 6, 8]}
      gap={[8, 10, 12]}  // Space between the cards
      wrap="wrap"
    >
      <Box
        maxW={['full', 'md', 'lg']}
        width={['300px', '350px', '400px']}  // Fixed width for consistency
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="2xl"
        transition="transform 0.3s"
        _hover={{ transform: 'scale(1.05)' }}
        bg="white"
        p={[6, 8, 10]}
        textAlign="center"
      >
        <VStack spacing={4}>
          <Image
            src="path-to-founder-image.jpg"
            alt="Founder Name"
            borderRadius="full"
            userSelect={"none"}
            boxSize={['100px', '140px', '160px']}
            mx="auto"
          />
          <Text fontWeight="bold" fontSize={['lg', 'xl', '2xl']}>
            Founder Name
          </Text>
          <Text color="gray.500" fontSize={['sm', 'md', 'lg']}>
            Founder & CEO
          </Text>
        </VStack>
      </Box>

      <Box
        maxW={['full', 'md', 'lg']}
        width={['300px', '350px', '400px']}  // Fixed width for consistency
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="2xl"
        transition="transform 0.3s"
        _hover={{ transform: 'scale(1.05)' }}
        bg="white"
        p={[6, 8, 10]}
        textAlign="center"
      >
        <VStack spacing={4}>
          <Image
            src="path-to-md-image.jpg"
            alt="Managing Director Name"
            borderRadius="full"
            userSelect={"none"}
            boxSize={['100px', '140px', '160px']}
            mx="auto"
          />
          <Text fontWeight="bold" fontSize={['lg', 'xl', '2xl']}>
            Managing Director Name
          </Text>
          <Text color="gray.500" fontSize={['sm', 'md', 'lg']}>
            Managing Director
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}

export default DirectorCard;
