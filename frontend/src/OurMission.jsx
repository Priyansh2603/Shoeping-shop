import { Box, Heading, Text, Stack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaStar, FaTrophy, FaShieldAlt } from "react-icons/fa";

const MotionBox = motion(Box);

const WhyChooseUsSection = () => {
  return (
    <MotionBox
      position="relative"
      bgImage="url('[Your Hero Image URL]')"
      bgPos="center"
      bgSize="cover"
      h="500px"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.6)"
        zIndex={1}
        backdropFilter="blur(5px)"
      />

      <MotionBox
        zIndex={2}
        textAlign="center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Heading
          as="h1"
          size="4xl"
          fontWeight="extrabold"
          textShadow="2px 2px rgba(0, 0, 0, 0.5)"
          mb={6}
        >
          Why Choose Us?
        </Heading>

        <Stack spacing={8} direction="row" justify="center">
          <Box textAlign="center">
            <Icon as={FaStar} boxSize={10} color="teal.400" mb={4} />
            <Text fontSize="xl" fontWeight="bold">Quality Products</Text>
            <Text color="gray.300">Top-notch quality with a focus on customer satisfaction.</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaTrophy} boxSize={10} color="teal.400" mb={4} />
            <Text fontSize="xl" fontWeight="bold">Award-Winning Service</Text>
            <Text color="gray.300">Recognized for exceptional customer support and service.</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaShieldAlt} boxSize={10} color="teal.400" mb={4} />
            <Text fontSize="xl" fontWeight="bold">Secure & Reliable</Text>
            <Text color="gray.300">Your security and privacy are our top priorities.</Text>
          </Box>
        </Stack>
      </MotionBox>
    </MotionBox>
  );
};

export default WhyChooseUsSection;
