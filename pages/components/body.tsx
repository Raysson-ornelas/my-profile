import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { BsGithub, BsDiscord, BsPerson, BsLinkedin } from 'react-icons/bs';

export default function SocialProfileWithImage() {
  return (
    <Center p={3}>
      <Box
        maxW={'100vw'}
        borderRadius="md"
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        overflow={'hidden'}>
        <Image h={'400px'} w={'full'} src="/img/capa.jpg" objectFit={'cover'} />
        <Flex justify={'center'} mt={-16}>
          <Image
            borderRadius="full"
            boxSize="200px"
            src="/img/eu.jpeg"
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={1}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Raysson Ornelas
            </Heading>
            <Text color={'gray.500'}>Frontend Developer</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'}>
            <HStack mt={{ lg: 1, md: 1 }} px={0} alignItems="flex-start">
              <IconButton
                aria-label="linkedin"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: 'blue.400' }}
                icon={<BsLinkedin size="28px" />}
              />
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: 'blue.400' }}
                icon={<BsGithub size="28px" />}
              />
              <IconButton
                aria-label="discord"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: 'blue.300' }}
                icon={<BsDiscord size="28px" />}
              />
            </HStack>
          </Stack>
          <Stack direction={'row'} justify={'center'} mt={2}>
            <Button
              w={'200px'}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Follow
            </Button>
            <Button
              w={'200px'}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Contact Me
            </Button>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
