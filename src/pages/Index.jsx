import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" py={4}>
        <Heading as="h1" size="xl">
          Turkish Migrational Services
        </Heading>
        <Button colorScheme="blue" as="a" href="/qa">
          Q&A Section
        </Button>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} py={4}>
        <Box flex="1" pr={4}>
          <Image src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzE0NTkzMTU1fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        </Box>
        <VStack flex="2" alignItems="start" spacing={4} pl={4}>
          <Heading as="h2" size="lg">
            About Us
          </Heading>
          <Text fontSize="lg">Turkish Migrational Services is a dedicated agency assisting individuals and families in navigating the complexities of immigration to Turkey. With over 20 years of experience, we ensure a smooth and reliable process.</Text>
          <Text fontSize="lg">Our team of experts specializes in visa processing, residency applications, and citizenship services, committed to providing personalized support throughout your journey to Turkey.</Text>
        </VStack>
      </Flex>
      <Box py={4}>
        <Heading as="h3" size="md" mb={4}>
          Our Services
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          <Box p={4} shadow="md" borderWidth="1px" flex="1" as="a" href="/residency-application">
            <Heading as="h4" size="sm">
              Residency Application
            </Heading>
            <Text mt={2}>Assistance with all aspects of applying for residency in Turkey.</Text>
          </Box>
          <Box p={4} shadow="md" borderWidth="1px" flex="1" as="a" href="/naturalization-process">
            <Heading as="h4" size="sm">
              Naturalization Process
            </Heading>
            <Text mt={2}>Guidance through the process of becoming a Turkish citizen.</Text>
          </Box>
          <Box p={4} shadow="md" borderWidth="1px" flex="1" as="a" href="/asylum-services">
            <Heading as="h4" size="sm">
              Asylum Services
            </Heading>
            <Text mt={2}>Support for individuals seeking asylum and refugee status.</Text>
          </Box>
        </Flex>
      </Box>
      <Box py={4}>
        <Heading as="h3" size="md" mb={4}>
          Contact Information
        </Heading>
        <Flex alignItems="center" mb={2}>
          <FaMapMarkerAlt />
          <Text ml={2}>123 Business Rd, Business City, BC 12345</Text>
        </Flex>
        <Flex alignItems="center" mb={2}>
          <FaPhone />
          <Text ml={2}>+1 (555) 123-4567</Text>
        </Flex>
        <Flex alignItems="center">
          <FaEnvelope />
          <Text ml={2}>contact@businessinc.com</Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
