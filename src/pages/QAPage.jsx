import { Box, Text } from "@chakra-ui/react";

function QAPage() {
  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>
        Welcome to the Q&A Page!
      </Text>
      <Text fontSize="lg" mb={2}>
        Download the documents below to find answers to common questions:
      </Text>
      <Box as="ul">
        <Text as="li">
          <a href="https://example.com/document1.pdf" target="_blank">
            Document 1
          </a>
        </Text>
        <Text as="li">
          <a href="https://example.com/document2.pdf" target="_blank">
            Document 2
          </a>
        </Text>
        <Text as="li">
          <a href="https://example.com/document3.pdf" target="_blank">
            Document 3
          </a>
        </Text>
      </Box>
    </Box>
  );
}

export default QAPage;
