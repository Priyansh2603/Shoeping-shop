import { Box, Heading, Text, Stack, Avatar, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);

const MeetTheFounderSection = () => {
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
        bg="gray.100"
        color="black"
        zIndex={1}
        backdropFilter="blur(5px)"
      />

      <MotionBox
        zIndex={2}
        textAlign="center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        px={{ base: 4, md: 8 }}
        py={{ base: 6, md: 10 }}
      >
        <Avatar
          name="Priyansh"
          src="https://res.cloudinary.com/dazhcprb8/image/upload/v1707134284/hehl2giro8iepsnsenn5.jpg"
          size="2xl"
          mb={4}
          borderWidth="5px"
          borderColor="teal.400"
        />
        <MotionHeading
          as="h1"
          size="2xl"
          fontWeight="bold"
          color="teal.100"
          mb={4}
          textShadow="2px 2px rgba(0, 0, 0, 0.5)"
        >
          Meet the Founder
        </MotionHeading>
        <Text
          fontSize="lg"
          maxW="4xl"
          mx="auto"
          mb={6}
          color="gray.800"
          lineHeight="1.6"
          textAlign="center"
        >
          Hi, I'm Priyansh, the founder and developer of Shoeping. My journey started with a deep passion for technology and a vision to create innovative solutions that genuinely impact people’s lives.
          <br />
          <br />
          Driven by curiosity and a desire to solve real-world problems, I've poured my heart into building a product that I believe will make a difference. I invite you to join us on this exciting journey and see what we have to offer.
        </Text>
        <MotionButton
          colorScheme="teal"
          size="lg"
          borderRadius="full"
          px={8}
          py={6}
          shadow="lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover More
        </MotionButton>
      </MotionBox>
    </MotionBox>
  );
};

export default MeetTheFounderSection;
