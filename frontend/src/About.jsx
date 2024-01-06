// AboutSection.js
import React from 'react';
import { Box, Heading, Text, Image, VStack, Flex,HStack, Icon } from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const AboutSection = () => {
  return (
    <>
    <Box padding={"2vw 5vh"} bg={"black"} color={"white"}> <VStack ><Heading color={"white"} padding={"2vh"} bg="pink.500" border={"2px solid pink"} mb={5}>Let's Know more about us</Heading></VStack>
    <Box border={"2px solid yellow"} margin={"2vh 0"} p={8}>
      <Heading color={"white"} mb={4}>About Shoeping</Heading>
      <Flex flexDir={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        <Image src="https://shoeping-shop.vercel.app/static/media/Shoeping-logo.1cddbf3dd454ce2b01e8.png" alt="Developer Profile" boxSize="200px" objectFit="cover" borderRadius="full" />
        <VStack ml={{ base: 0, md: 8 }} textAlign={{ base: 'center', md: 'left' }} mt={{ base: 4, md: 0 }}>
          <Text fontSize="lg">
            Hello! We are Shoeping, a dedicated team of developers and creators behind our ecommerce
            platform. Our goal is to provide a seamless and enjoyable shopping experience for our customers.
          </Text>
          <Text fontSize="lg">
            At Shoeping, we offer a wide range of products, including . Our Footwears, Clothing, Groomings, Groceries and many more
            Platform is designed to be user-friendly, secure, and efficient.
          </Text>
          <Text fontSize="lg">
            Whether you are looking for Footwears, Clothing, Groomings, exploring new arrivals, or enjoying exclusive deals, we
            have something for everyone. Thank you for choosing Shoeping for your online shopping needs!
          </Text>
        </VStack>
      </Flex>
    </Box>
    <Box border={"2px solid yellow"} p={8}>
      <Heading mb={4} color={"white"}>About Developer</Heading>
      <Flex flexDir={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        <Image src='data:image/jpeg;base64,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' alt="Developer Profile" boxSize="200px" objectFit="cover" borderRadius="full" />
        <VStack ml={{ base: 0, md: 8 }} textAlign={{ base: 'center', md: 'left' }} mt={{ base: 4, md: 0 }}>
          <Text fontSize="lg">
            Hello! I'm Priyansh Daksha, a passionate developer with a focus on Software Development. I love creating web
            applications that provide benefits to the society by solving their real problems.
          </Text>
          <Text fontSize="lg">
            My skills include Software Development and problem solving. I am always eager to learn new technologies and explore innovative ways to
            solve problems.
          </Text>
          <HStack spacing={4} mt={4}>
            <Link to={"https://twitter.com/Priyansh_2603"} isExternal>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link to={"https://www.linkedin.com/in/priyansh-daksha-8a54a2212"} isExternal>
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>
            <Link to={"https://www.instagram.com/priyansh_2603/"} isExternal>
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
            <Link to={"ishudaksh2603@gmail.com"} isExternal>
              <Icon as={FaEnvelope} boxSize={6} />
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
    </Box>
    </>
  );
};

export default AboutSection;
