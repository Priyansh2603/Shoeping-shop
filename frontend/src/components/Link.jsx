import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as NavLink } from 'react-router-dom';

const CustomLink = () => {
  return (
    <ChakraLink as={NavLink} to="/" color="whatsapp.100" _hover={{ color: 'white' }}>
      Home
    </ChakraLink>
  );
};

export default CustomLink;