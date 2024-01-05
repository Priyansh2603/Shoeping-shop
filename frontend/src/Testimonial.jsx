// Testimonial.js
import React from 'react';
import { Box, Avatar, Text, Flex } from '@chakra-ui/react';

const Testimonial = ({ name, position, comment, avatarUrl }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Flex align="center">
        <Avatar src={avatarUrl} alt={name} mr={4} />
        <Box>
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" color="gray.500">
            {position}
          </Text>
        </Box>
      </Flex>
      <Text mt={2}>{comment}</Text>
    </Box>
  );
};

export default Testimonial;
