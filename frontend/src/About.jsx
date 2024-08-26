import {
  Box,
  Text,
  Heading,
  Stack,
  Grid,
  GridItem,
  Image,
  Button,
  VStack,
  Avatar,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaRegLightbulb, FaRegHeart, FaRegHandshake, FaBullseye } from "react-icons/fa";
import { GiRocket } from "react-icons/gi";
import { motion } from "framer-motion";
// const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);
const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const AboutUs = () => {
  return (
    <Box>
      {/* Hero Section */}
      
      {/* Values Section */}
      <Box py={20} px={10} bg="gray.50">
        <Stack spacing={12} maxW="6xl" mx="auto">
          <Heading as="h2" size="xl" textAlign="center" color="teal.600">
            What We Stand For
          </Heading>
          <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={8}>
            <GridItem>
              <MotionVStack
                spacing={6}
                p={8}
                bg="white"
                borderRadius="xl"
                shadow="lg"
                whileHover={{ scale: 1.05 }}
              >
                <Icon as={FaRegLightbulb} w={12} h={12} color="teal.500" />
                <Text fontSize="xl" fontWeight="bold" color="gray.700">
                  Innovation
                </Text>
                <Text fontSize="md" color="gray.600" textAlign="center">
                  We constantly innovate to bring you the best in [Product Type],
                  blending design and functionality seamlessly.
                </Text>
              </MotionVStack>
            </GridItem>
            <GridItem>
              <MotionVStack
                spacing={6}
                p={8}
                bg="white"
                borderRadius="xl"
                shadow="lg"
                whileHover={{ scale: 1.05 }}
              >
                <Icon as={FaRegHeart} w={12} h={12} color="teal.500" />
                <Text fontSize="xl" fontWeight="bold" color="gray.700">
                  Passion
                </Text>
                <Text fontSize="md" color="gray.600" textAlign="center">
                  Our passion for excellence drives everything we do, ensuring
                  you receive top-quality products.
                </Text>
              </MotionVStack>
            </GridItem>
            <GridItem>
              <MotionVStack
                spacing={6}
                p={8}
                bg="white"
                borderRadius="xl"
                shadow="lg"
                whileHover={{ scale: 1.05 }}
              >
                <Icon as={FaRegHandshake} w={12} h={12} color="teal.500" />
                <Text fontSize="xl" fontWeight="bold" color="gray.700">
                  Commitment
                </Text>
                <Text fontSize="md" color="gray.600" textAlign="center">
                  We are committed to our customers, providing unparalleled
                  service and quality with every purchase.
                </Text>
              </MotionVStack>
            </GridItem>
          </Grid>
        </Stack>
      </Box>

      {/* Vision & Mission Section */}
      <Box py={20} px={10} bg="white">
        <Stack spacing={12} maxW="6xl" mx="auto">
          <Heading as="h2" size="xl" textAlign="center" color="teal.600">
            Our Vision & Mission
          </Heading>
          <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} gap={8}>
            <GridItem>
              <MotionVStack
                spacing={6}
                p={8}
                bg="gray.50"
                borderRadius="xl"
                shadow="lg"
                whileHover={{ scale: 1.05 }}
              >
                <Icon as={GiRocket} w={12} h={12} color="teal.500" />
                <Text fontSize="xl" fontWeight="bold" color="gray.700">
                  Our Vision
                </Text>
                <Text fontSize="md" color="gray.600" textAlign="center">
                  To be the leading eCommerce platform that delivers exceptional
                  products and experiences, enhancing the lives of our customers
                  and communities.
                </Text>
              </MotionVStack>
            </GridItem>
            <GridItem>
              <MotionVStack
                spacing={6}
                p={8}
                bg="gray.50"
                borderRadius="xl"
                shadow="lg"
                whileHover={{ scale: 1.05 }}
              >
                <Icon as={FaBullseye} w={12} h={12} color="teal.500" />
                <Text fontSize="xl" fontWeight="bold" color="gray.700">
                  Our Mission
                </Text>
                <Text fontSize="md" color="gray.600" textAlign="center">
                  To consistently provide innovative, high-quality products and
                  services that meet the evolving needs of our customers, while
                  fostering a culture of integrity, sustainability, and social
                  responsibility.
                </Text>
              </MotionVStack>
            </GridItem>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default AboutUs;
