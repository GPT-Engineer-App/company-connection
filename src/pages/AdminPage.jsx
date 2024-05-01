import React from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';

function AdminPage() {
  return (
    <Box p={5}>
      <Text fontSize="xl" mb={4}>Admin Document Upload</Text>
      <Input placeholder="Upload Document" type="file" mb={3} />
      <Button colorScheme="blue">Upload</Button>
    </Box>
  );
}

export default AdminPage;