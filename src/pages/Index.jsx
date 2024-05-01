import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" py={4}>
        <Heading as="h1" size="xl">
          Business Inc.
        </Heading>
        <Button colorScheme="blue">Contact Us</Button>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} py={4}>
        <Box flex="1" pr={4}>
          <Image src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzE0NTkzMTU1fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        </Box>
        <VStack flex="2" alignItems="start" spacing={4} pl={4}>
          <Heading as="h2" size="lg">
            About Us
          </Heading>
          <Text fontSize="lg">Business Inc. is a leading firm in the industry with over 20 years of experience. We provide top-notch services to our clients, ensuring high-quality results and satisfaction.</Text>
          <Text fontSize="lg">Our team consists of highly skilled professionals dedicated to delivering excellence in all our projects. We specialize in a variety of services, including consulting, project management, and more.</Text>
        </VStack>
      </Flex>
      <Box py={4}>
        <Heading as="h3" size="md" mb={4}>
          Our Services
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          <Box p={4} shadow="md" borderWidth="1px" flex="1">
            <Heading as="h4" size="sm">
              Consulting
            </Heading>
            <Text mt={2}>Expert advice and strategic planning for your business needs.</Text>
          </Box>
          <Box p={4} shadow="md" borderWidth="1px" flex="1">
            <Heading as="h4" size="sm">
              Project Management
            </Heading>
            <Text mt={2}>Comprehensive management solutions from start to finish.</Text>
          </Box>
          <Box p={4} shadow="md" borderWidth="1px" flex="1">
            <Heading as="h4" size="sm">
              Training & Development
            </Heading>
            <Text mt={2}>Professional training programs to enhance your team's skills.</Text>
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
